<script setup>
import { onBeforeMount, ref } from 'vue'
import { API_COMICS } from '../utils/const'

import MyNavbar from '../components/MyNavbar.vue'
import MySearcher from '../components/MySearcher.vue'
import Back from '../assets/back.svg'

const comicsApi = ref([])
const filteredHero = ref([])
const filteredComics = ref([])
const filteredEvents = ref([])
const filteredSeries = ref([])

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
      for (let i of value) {
        if (value.indexOf(i) === 3) {
          typeof i === 'string' ? (filteredSeries.value = [i]) : (filteredSeries.value = i)
        } else if (value.indexOf(i) === 2) {
          typeof i === 'string' ? (filteredEvents.value = [i]) : (filteredEvents.value = i)
        } else if (value.indexOf(i) === 1) {
          typeof i === 'string' ? (filteredHero.value = [i]) : (filteredHero.value = i)
        } else if (value.indexOf(i) === 0) {
          typeof i === 'string' ? (filteredComics.value = [i]) : (filteredComics.value = i)
        } else {
          filteredComics.value = i
          filteredHero.value = i
          filteredEvents.value = i
          filteredSeries.value = i
        }
      }
    }
  } catch (e) {
    throw new Error(e)
  }
}

onBeforeMount(async () => {
  comicsApi.value = await fetchData(API_COMICS)
})
</script>
<template>
  <section>
    <MyNavbar />
    <div>
      <router-link to="/">
        <img class="IMG" :src="Back" alt="back" />
      </router-link>
      <h1>Comics</h1>
    </div>
    <MySearcher
      :heroesApi="filteredHero"
      :comicsApi="comicsApi"
      :eventsApi="filteredEvents"
      :seriesApi="filteredSeries"
      @filtered-hero="handleEmit"
    />
    <main class="characters" v-if="filteredComics <= 0">
      <ul
        v-for="i in comicsApi"
        :key="i"
        class="card img"
        :style="{ backgroundImage: `url(${i.thumbnail.path}.${i.thumbnail.extension})` }"
      >
        <article class="textBox">
          <li class="text head">
            {{ i.title }}
          </li>
        </article>
      </ul>
    </main>
    <main class="characters" v-else>
      <ul
        v-for="i in filteredComics"
        :key="i"
        class="card img"
        :style="{ backgroundImage: `url(${i.thumbnail.path}.${i.thumbnail.extension})` }"
      >
        <article class="textBox">
          <li class="text head">
            {{ i.title }}
          </li>
        </article>
      </ul>
    </main>
  </section>
</template>
<style scoped>
.card {
  padding: 0;
  width: 195px;
  height: 285px;
  background: #313131;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.2s ease-in-out;
  background-size: cover;
  margin: 1rem;
  border: #100f0f82 solid 3px;
}
.card:hover {
  box-shadow: 0 0 20px #000;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(20px); /* Ajusta el valor del desenfoque según tus necesidades */
  z-index: -1;
}
.img {
  transition: 0.2s ease-in-out;
}

.textBox {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: 0.2s ease-in-out;
  z-index: 2;
}
.text {
  width: 10ch;
  text-align: center;
  height: max-content;
  list-style: none;
  color: #ff0000;
}
.textBox > .text {
  font-weight: bold;
}

.textBox > .head {
  font-size: 20px;
}

.textBox > .price {
  font-size: 17px;
}

.textBox > span {
  font-size: 12px;
  color: lightgrey;
}

.card:hover > .textBox {
  opacity: 1;
}

.card:hover > .img {
  height: 65%;
  filter: blur(7px);
  animation: anim 3s infinite;
}

@keyframes anim {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

.card:hover {
  transform: scale(1.04) rotate(-1deg);
}

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
  min-height: 100vh;
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
  background-color: #19191950;
  border-radius: 0.8rem;
  box-shadow: 0 0 7px #00000076;
  width: 100%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5vh 0;
  margin-top: 10vh;
  margin-bottom: 10vh;
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
  color: #c0c0c0;
}
</style>
