<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
import { API_KEY, API_COMICS, API_EVENTS, API_SERIES } from '../utils/const.js'

import MyHeader from '../components/MyHeader.vue'
import MyNavbar from '../components/MyNavbar.vue'
import MySearcher from '../components/MySearcher.vue'
import MyLayout from '../components/MyLayout.vue'

const heroesApi = ref([])
const comicsApi = ref([])
const eventsApi = ref([])
const seriesApi = ref([])
const filteredHero = ref([])
const filteredComics = ref([])
const filteredEvents = ref([])
const filteredSeries = ref([])
const vMenu = ref(false)
const headerRef = ref(null)

async function fetchData(url) {
  try {
    const resp = await fetch(url)
    const respData = await resp.json()
    let returnData = await respData.data.results
    return returnData
  } catch (error) {
    console.log(error)
  }
}

function handleEmit(ref) {
  const value = ref.value
  try {
    if (value.length == 0) {
      filteredComics.value = value
      filteredEvents.value = value
      filteredHero.value = value
      filteredSeries.value = value
    } else if (value.length == 4) {
      const [comics, hero, events, series] = value.map((item) =>
        typeof item === 'string' ? [item] : item
      )
      filteredComics.value = comics
      filteredEvents.value = events
      filteredHero.value = hero
      filteredSeries.value = series
    }
  } catch (e) {
    throw new Error(e)
  }
}
function handleEmitComics(value) {
  filteredComics.value = value
  console.log(value)
}

const changeVisibility = () => {
  const header = headerRef.value.$el.getBoundingClientRect().top
  if (header >= -520) {
    vMenu.value = false
  } else if (header <= -523) {
    vMenu.value = true
  }
}

onBeforeMount(async () => {
  addEventListener('scroll', changeVisibility)
  heroesApi.value = await fetchData(API_KEY)
  comicsApi.value = await fetchData(API_COMICS)
  eventsApi.value = await fetchData(API_EVENTS)
  seriesApi.value = await fetchData(API_SERIES)
})

onBeforeUnmount(() => {
  removeEventListener('scroll', changeVisibility)
})
</script>
<template>
  <main>
    <MyHeader ref="headerRef" />
    <MyNavbar v-if="vMenu" />
    <MySearcher
      :eventsApi="eventsApi"
      :comicsApi="comicsApi"
      :heroesApi="heroesApi"
      :seriesApi="seriesApi"
      @filtered-hero="handleEmit"
      @filtered-comics="handleEmitComics"
    />
    <MyLayout
      :eventsApi="eventsApi"
      :comicsApi="comicsApi"
      :heroesApi="heroesApi"
      :seriesApi="seriesApi"
      :filteredHero="filteredHero"
      :filteredComics="filteredComics"
      :filteredEvents="filteredEvents"
      :filteredSeries="filteredSeries"
    />
  </main>
</template>
<style scoped>
main {
  height: 100%;
  width: 100%;
  font-family: monospace;
  color: #cecece;
  margin: 0;
  padding: 0;
  background: rgb(25, 25, 25);
  background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(66, 29, 29, 1) 25%,
    rgba(101, 20, 20, 1) 48%,
    rgba(60, 23, 23, 1) 75%,
    rgba(25, 25, 25, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
