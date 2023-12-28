<script setup>
import { onUpdated } from 'vue'

import MyCharacters from './MyCharacters.vue'
import MyComics from './MyComics.vue'
import MyEvents from './MyEvents.vue'

const props = defineProps([
  'heroesApi',
  'filteredHero',
  'comicsApi',
  'filteredComics',
  'eventsApi',
  'filteredEvents'
])
const titles = ['Characters', 'Comics', 'Events']

onUpdated(() => {})
</script>
<template>
  <article class="title" v-for="i in titles" :key="i">
    <p>{{ i }}</p>
    <router-link :to="'/' + i">
      <span>See More</span>
    </router-link>
    <MyCharacters
      :props="props.heroesApi"
      :filteredHero="props.filteredHero"
      v-if="i === 'Characters'"
    />
    <MyComics
      :comicsApi="props.comicsApi"
      :filteredComics="props.filteredComics"
      v-if="i === 'Comics'"
    />
    <MyEvents
      :eventsApi="props.eventsApi"
      :filteredHero="props.filteredHero"
      :filteredEvents="props.filteredEvents"
      v-if="i === 'Events'"
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
