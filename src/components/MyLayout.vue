<script setup>
import { ref } from 'vue'

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
const indicator = ref('')
const titles = ['Characters', 'Comics', 'Events', 'Series']

function ChangeCardVisibility(value) {
  const name = value.target.innerText

  const apiProps = Object.keys(props).filter((prop) => prop.includes('Api'))
  for (let apiProp of apiProps) {
    const filteredData = props[apiProp].filter(
      (i) => i?.title?.trim() === name || i?.name?.trim() === name
    )
    if (filteredData.length > 0) {
      heroData.value = filteredData[0]
      showCard.value = !showCard.value
    }
  }
}

function closeCard(value) {
  showCard.value = value
}
function handleIndicator(e) {
  indicator.value = e.value
}
</script>
<template>
  <MyCardInfo v-if="showCard" :heroData="heroData" :showCard="closeCard" :indicator="indicator" />
  <article class="title" v-for="i in titles" :key="i">
    <p>{{ i }}</p>
    <router-link :to="'/' + i">
      <span>See More</span>
    </router-link>
    <MyCharacters
      @indicator="handleIndicator"
      :ChangeCardVisibility="ChangeCardVisibility"
      :props="props.heroesApi"
      :filteredHero="props.filteredHero"
      :i="i"
      v-if="i === 'Characters'"
    />
    <MyComics
      @indicator="handleIndicator"
      :ChangeCardVisibility="ChangeCardVisibility"
      :comicsApi="props.comicsApi"
      :filteredComics="props.filteredComics"
      :i="i"
      v-if="i === 'Comics'"
    />
    <MyEvents
      @indicator="handleIndicator"
      :ChangeCardVisibility="ChangeCardVisibility"
      :eventsApi="props.eventsApi"
      :filteredEvents="props.filteredEvents"
      :i="i"
      v-if="i === 'Events'"
    />
    <MySeries
      @indicator="handleIndicator"
      :ChangeCardVisibility="ChangeCardVisibility"
      :seriesApi="props.seriesApi"
      :filteredSeries="props.filteredSeries"
      :i="i"
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
