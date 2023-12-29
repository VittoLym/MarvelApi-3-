<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { API_KEY } from '../utils/const'

import MyNavbar from '../components/MyNavbar.vue'
import MySearcher from '../components/MySearcher.vue'
import Back from '../assets/back.svg'

const heroes = ref([])

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

onMounted(async () => {
  heroes.value = await fetchData(API_KEY)
})
</script>
<template>
  <section>
    <MyNavbar />
    <div>
      <router-link to="/">
        <img class="IMG" :src="Back" alt="back" />
      </router-link>
      <h1>Characters</h1>
    </div>
    <MySearcher />
    <main class="characters">
      <ul v-for="i in heroes" :key="i">
        <article
          class="Container"
          :style="{ backgroundImage: `url(${i.thumbnail.path}.${i.thumbnail.extension})` }"
        >
          <li>
            {{ i.name }}
          </li>
        </article>
      </ul>
    </main>
  </section>
</template>
<style scoped>
span {
  margin: 2rem;
  padding: 0.3rem;
  color: #fff;
  background-color: #000;
  border-radius: 1rem;
  border: solid 2px #ff0000;
  cursor: pointer;
}
section {
  height: max-content;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(66, 29, 29, 1) 25%,
    rgba(101, 20, 20, 1) 48%,
    rgba(60, 23, 23, 1) 75%,
    rgba(25, 25, 25, 1) 100%
  );
}
div {
  height: 30vh;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: start;
}
.characters {
  height: max-content;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10vh;
}
.Container {
  height: 30vh;
  width: 20vw;
  background-size: cover;
  border-radius: 0.6rem;
  box-shadow: 0 0 15px #000;
}
.Container li {
  list-style: none;
  height: 100%;
  width: 100%;
}
.IMG {
  height: 2rem;
  transition: all ease 0.5s;
}
.IMG:hover {
  scale: 1.2;
}
h1 {
  margin: 0.4rem;
  width: 80%;
}
</style>
