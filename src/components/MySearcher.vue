<script setup>
import { ref, onUpdated } from 'vue'

import SearchIcon from '../assets/search.svg'
import OptionsIcon from '../assets/options.svg'
import MyFilters from './MyFilters.vue'

const characters = ref([])
const comics = ref([])
const events = ref([])
const series = ref([])
const inputText = ref('')
const filteredProps = ref([])
const filters = ref(false)
const props = defineProps(['heroesApi', 'comicsApi', 'eventsApi', 'seriesApi'])
const emits = defineEmits(['filteredHero', 'filteredComics', 'filteredEvents'])
const searchHero = () => {
  if (inputText.value !== '') {
    const propsToFilter = [comics, events, series]
    filteredProps.value = propsToFilter.map((prop) => {
      let filteredData = prop.value.filter((item) =>
        item.title?.toLowerCase().startsWith(inputText.value.toLowerCase())
      )
      if (filteredData.length === 0) {
        filteredData = `there are no coicidencia`
      }
      return filteredData
    })
    let filteredArray = characters.value.filter((i) =>
      i.name?.toLowerCase().startsWith(inputText.value.toLowerCase())
    )
    if (filteredArray.length <= 0) {
      filteredArray = `there are no coincidence`
      filteredProps.value.splice(1, 0, filteredArray)
    } else {
      filteredProps.value.splice(1, 0, filteredArray)
    }
    emits('filteredHero', filteredProps)
  }
  if (inputText.value === '') {
    filteredProps.value = []
    emits('filteredHero', filteredProps)
  }
}
const optionsFinder = () => {
  filters.value = !filters.value
}

onUpdated(() => {
  characters.value = props.heroesApi
  comics.value = props.comicsApi
  events.value = props.eventsApi
  series.value = props.seriesApi
})
</script>
<template>
  <div class="finder">
    <label for="search">Find your Character, Comic or Movie</label>
    <article class="inputContainer">
      <input
        id="search"
        type="text"
        @keydown.enter="searchHero"
        :ref="inputText"
        v-model="inputText"
        placeholder="Hulk, Ironman, Reed Richards..."
      />
      <article class="Icons">
        <img @click="searchHero" class="icon" :src="SearchIcon" alt="find hero" />
        <img @click="optionsFinder" class="icon option" :src="OptionsIcon" alt="finder options" />
      </article>
    </article>
    <MyFilters v-if="filters" />
  </div>
</template>
<style scoped>
h1 {
  margin: 5vh 0;
}
.finder {
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
label {
  color: #c0c0c0;
  width: 40vw;
  margin-bottom: 1.5vh;
  margin-top: 10vh;
}
.inputContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 3px solid #f900006c;
  border-radius: 0.6rem;
  box-shadow: 0 0 7px #00000076;
  cursor: pointer;
  margin: 0;
  height: 10vh;
  width: 40vw;
  margin-bottom: 1vh;
}
.inputContainer:focus-visible {
  outline: 2px solid #00000087;
  cursor: text;
}
.inputContainer:focus-visible {
  outline: 2px solid #00000087;
  cursor: text;
}
.inputContainer:hover {
  box-shadow: 0 0 7px #f5c7c71b;
}
.Icons {
  display: flex;
  justify-content: end;
  align-items: center;
  width: max-content;
  height: 10vh;
}
input {
  background-color: transparent;
  border: none;
  height: 8vh;
  width: 100%;
  padding: 0 2vw;
  transition: all ease 0.3s;
  font-size: 1.2rem;
  font-weight: bolder;
}
input:focus-visible {
  outline: none;
  cursor: text;
}
input::placeholder {
  color: #0c0c0c;
  font-weight: bolder;
  font-size: 1.2rem;
}
.icon {
  height: 8vh;
  top: 129vh;
  right: 34.4vw;
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  transition: all ease 0.2s;
  cursor: pointer;
}
.option {
  right: 31vw;
}
.inputContainer:hover + .icon {
  scale: 1.05;
}
.icon:hover {
  scale: 1.1;
}

@media (max-width: 800px) {
  label {
    width: 59vw;
  }
  .inputContainer {
    width: 60vw;
  }
}
</style>
