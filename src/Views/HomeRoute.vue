<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { API_KEY, API_COMICS, API_EVENTS } from '../utils/const.js'

import MyHeader from '../components/MyHeader.vue'
import MyNavbar from '../components/MyNavbar.vue'
import MySearcher from '../components/MySearcher.vue'
import MyLayout from '../components/MyLayout.vue'

const heroesApi = ref([])
const filteredHero = ref([])
const filteredComics = ref([])
const filteredEvents = ref([])
const vMenu = ref(false)
const headerRef = ref(null)
const comicsApi = ref([])
const eventsApi = ref([])

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

function handleEmit(value) {
  try {
    if (value.length == 0) {
      filteredComics.value = value
      filteredEvents.value = value
      filteredHero.value = value
    } else if (value.length == 3) {
      for (let i of value) {
        if (value.indexOf(i) === 2) {
          typeof i === 'string' ? (filteredEvents.value = [i]) : (filteredEvents.value = i)
        } else if (value.indexOf(i) === 1) {
          typeof i === 'string' ? (filteredHero.value = [i]) : (filteredHero.value = i)
        } else if (value.indexOf(i) === 0) {
          typeof i === 'string' ? (filteredComics.value = [i]) : (filteredComics.value = i)
        } else {
          filteredComics.value = i
          filteredHero.value = i
          filteredEvents.value = i
        }
      }
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
  if (header >= -500) {
    vMenu.value = false
  } else if (header <= -530) {
    vMenu.value = true
  }
}

onMounted(async () => {
  heroesApi.value = await fetchData(API_KEY)
  addEventListener('scroll', changeVisibility)
  comicsApi.value = await fetchData(API_COMICS)
  eventsApi.value = await fetchData(API_EVENTS)
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
      @filtered-hero="handleEmit"
      @filtered-comics="handleEmitComics"
    />
    <MyLayout
      :eventsApi="eventsApi"
      :comicsApi="comicsApi"
      :heroesApi="heroesApi"
      :filteredHero="filteredHero"
      :filteredComics="filteredComics"
      :filteredEvents="filteredEvents"
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
