<script setup>
import { onUpdated, ref } from 'vue'

import MyCharacters from './Layout/MyCharacters.vue'
import MyComics from './Layout/MyComics.vue'
import MyEvents from './Layout/MyEvents.vue'
import MySeries from './Layout/MySeries.vue'
import MyCardInfo from './MyCardInfo.vue'

const props = defineProps([
  'heroesApi',
  'filteredHero',
  'comicsApi',
  'filteredComics',
  'eventsApi',
  'filteredEvents',
  'seriesApi',
  'filteredSeries'
])

const heroData = ref('')
const showCard = ref(false)
const titles = ['Characters', 'Comics', 'Events', 'Series']

function ChangeCardVisibility(value) {
  const name = value.target.innerText

  const apiProps = Object.keys(props).filter((prop) => prop.includes('Api'))
  for (let apiProp of apiProps) {
    const filteredData = props[apiProp].filter(
      (i) => i?.title?.trim() === name || i?.name?.trim() === name
    )
    console.log(filteredData[0])
    if (filteredData.length > 0) {
      heroData.value = filteredData[0]
      showCard.value = !showCard.value
    }
  }
}

function closeCard(value) {
  showCard.value = value
}
</script>
<template>
  <article class="title" v-for="i in titles" :key="i">
    <p>{{ i }}</p>
    <router-link :to="'/' + i">
      <span>See More</span>
    </router-link>
    <MyCardInfo v-if="showCard" :heroData="heroData" :showCard="closeCard" />
    <MyCharacters
      :ChangeCardVisibility="ChangeCardVisibility"
      :props="props.heroesApi"
      :filteredHero="props.filteredHero"
      v-if="i === 'Characters'"
    />
    <MyComics
      :ChangeCardVisibility="ChangeCardVisibility"
      :comicsApi="props.comicsApi"
      :filteredComics="props.filteredComics"
      v-if="i === 'Comics'"
    />
    <MyEvents
      :ChangeCardVisibility="ChangeCardVisibility"
      :eventsApi="props.eventsApi"
      :filteredEvents="props.filteredEvents"
      v-if="i === 'Events'"
    />
    <MySeries
      :ChangeCardVisibility="ChangeCardVisibility"
      :seriesApi="props.seriesApi"
      :filteredSeries="props.filteredSeries"
      v-if="i === 'Series'"
    />
  </article>
</template>
<style scoped>
.title {
  display: flex;
  width: 75%;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 2rem;
}
.title p {
  display: block;
  width: max-content;
  font-size: 3rem;
  margin: 0;
}
.title span {
  height: min-content;
  border: 3px solid #f90000;
  border-radius: 2rem;
  padding: 0.3rem 0.7rem;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1.3rem;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}
.title span:hover {
  background-color: #f90000;
  color: #242424;
}
</style>
