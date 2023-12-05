<script setup>
import { ref, onMounted } from 'vue'
import { API_KEY } from '../utils/const'

const heroesApi = ref()

onMounted(async () => {
  await fetchData()
})

async function fetchData() {
  try {
    const resp = await fetch(API_KEY)
    const respData = await resp.json()
    heroesApi.value = await respData.data.results
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div>
    <ul>
      <li
        v-for="i in heroesApi"
        :key="i.ul"
        :style="{ backgroundImage: `url(${i.thumbnail.path}.${i.thumbnail.extension})` }"
      >
        <h3>{{ i.name }}</h3>
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  background-color: #19191950;
  border-radius: 0.8rem;
  box-shadow: 0 0 7px #00000076;
}
ul {
  padding: 0;
  margin: 0;
  max-width: 80vw;
  max-height: 30vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
}
ul li {
  height: 20vh;
  width: 10vw;
  min-width: 100px;
  margin: 2rem 0.5rem;
  border-radius: 0.8rem;
  overflow: hidden;
  background-size: cover;
  color: #232323;
  transition: all ease 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  border-left: #191919 solid 3px;
  border-bottom: #191919 solid 3px;
}
ul li:hover {
  scale: 1.05;
}
ul li h3 {
  color: #ffff;
  margin: 0;
}
</style>
