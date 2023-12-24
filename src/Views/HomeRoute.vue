<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { API_KEY } from '../utils/const.js'

import MyHeader from '../components/MyHeader.vue'
import MyNavbar from '../components/MyNavbar.vue'
import MySearcher from '../components/MySearcher.vue'
import MyLayout from '../components/MyLayout.vue'

const heroesApi = ref([])
const filteredHero = ref([])
const vMenu = ref(false)
const headerRef = ref(null)

async function fetchData() {
  try {
    const resp = await fetch(API_KEY)
    const respData = await resp.json()
    heroesApi.value = await respData.data.results
  } catch (error) {
    console.log(error)
  }
}

function handleEmit(value) {
  filteredHero.value = value
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
  await fetchData()
  addEventListener('scroll', changeVisibility)
})

onBeforeUnmount(() => {
  removeEventListener('scroll', changeVisibility)
})
</script>
<template>
  <main>
    <MyHeader ref="headerRef" />
    <MyNavbar v-if="vMenu" />
    <MySearcher :heroesApi="heroesApi" @filtered-hero="handleEmit" />
    <MyLayout :heroesApi="heroesApi" :filteredHero="filteredHero" />
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
