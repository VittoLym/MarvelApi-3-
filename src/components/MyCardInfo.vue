<script setup>
import { onBeforeMount, ref } from 'vue'
import Close from '../assets/close.svg'

const props = defineProps(['heroData', 'showCard'])
const hero = ref('')

const handleVisibility = () => {
  props.showCard(false)
}

onBeforeMount(() => {
  hero.value = props.heroData
})
</script>
<template>
  <article>
    <img class="close" @click="handleVisibility" :src="Close" alt="Close Card" />
    <img class="pj" :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`" alt="mantecol" />
    <h1>{{ hero.name ? hero.name : hero.title }}</h1>
    <p>{{ hero.description }}</p>
    <div class="buttons">
      <button class="button">comics</button>
      <button class="button">series</button>
      <button class="button">stories</button>
    </div>
  </article>
</template>
<style scoped>
article {
  left: 35%;
  color: #c0c0c0;
  top: 18vh;
  position: fixed;
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(66, 29, 29, 1) 25%,
    rgba(101, 20, 20, 1) 48%,
    rgba(60, 23, 23, 1) 75%,
    rgba(25, 25, 25, 1) 100%
  );
  box-shadow: 0 0 7px #00000076;
  height: 80vh;
  z-index: 100;
  border-radius: 0.8rem;
  overflow: auto;
}
h1 {
  text-align: center;
  width: 80%;
  margin: 0 10%;
  margin-top: 0.6rem;
}
p {
  width: 80%;
  margin: 0;
  margin-right: 10%;
  margin-bottom: 0.8rem;
  overflow-y: auto;
}
.pj {
  height: 40%;
  width: 100%;
  border-radius: 0.8rem 0.8rem 0 0;
}
.close {
  position: absolute;
  height: 40px;
  width: 40px;
  margin: 0.5rem;
  cursor: pointer;
}
.buttons {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 2vh;
}
.button {
  cursor: pointer;
  border: 2px solid #ff0000;
  font-size: 1.3rem;
  background-color: transparent;
  border-radius: 1rem;
  padding: 0 0.8rem;
  margin: 0 0.7rem;
  transition: all ease 0.5s;
  color: #c0c0c0;
}
.button:hover {
  scale: 1.1;
  color: #000000;
}
</style>
