<script setup>
import { ref, onUpdated } from 'vue'

const emits = defineEmits(['indicator'])
const props = defineProps(['props', 'filteredHero', 'ChangeCardVisibility', 'i'])
const heroesApi = ref([])
const filteredHero = ref([])
const indicator = ref('Characters')

const handleClick = () => {
  emits('indicator', indicator)
}

onUpdated(() => {
  indicator.value = props.i
  heroesApi.value = props.props
  filteredHero.value = props.filteredHero
})
</script>
<template>
  <div
    v-if="filteredHero.length >= 0 && heroesApi.length >= 1 && typeof filteredHero[0] !== 'string'"
    @click="handleClick"
  >
    <ul v-if="filteredHero.length >= 1" class="if">
      <li
        @click="props.ChangeCardVisibility"
        v-for="i in filteredHero.slice(0, 6)"
        :key="i.ul"
        :style="{ backgroundImage: `url(${i.thumbnail.path}.${i.thumbnail.extension})` }"
      >
        <div class="name">
          <p>{{ i.name }}</p>
        </div>
      </li>
    </ul>
    <ul v-else-if="heroesApi.length >= 0" class="else-if">
      <li
        @click="props.ChangeCardVisibility"
        v-for="i in heroesApi.slice(0, 6)"
        :key="i.ul"
        :style="{ backgroundImage: `url(${i.thumbnail.path}.${i.thumbnail.extension})` }"
      >
        <div class="name">
          <p>{{ i.name }}</p>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <ul>
      <p>{{ filteredHero[0] }}</p>
    </ul>
  </div>
</template>
<style scoped>
div {
  background-color: #19191950;
  border-radius: 0.8rem;
  box-shadow: 0 0 7px #00000076;
  width: 100%;
}
ul {
  padding: 0;
  margin: 0 0.5rem;
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
}
ul li:hover {
  scale: 1.05;
}
ul li .name {
  background-color: #f90000;
  height: 100%;
  width: 100%;
  opacity: 0;
  border-radius: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
}
ul li .name:hover {
  opacity: 1;
  background-color: #f900007e;
}
ul li p {
  align-self: center;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: bolder;
}
@media (max-width: 800px) {
  ul {
    max-height: 55vh;
    padding: 1rem 0;
  }
  ul li {
    height: 10vh;
    margin: 1rem 0.5rem;
  }
}
</style>
