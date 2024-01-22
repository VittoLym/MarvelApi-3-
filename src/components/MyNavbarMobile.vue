<script setup>
import { ref } from 'vue'
import Menu from '../../public/menu.svg'

const toggleMenu = ref(false)

function changeMenu() {
  toggleMenu.value = !toggleMenu.value
}
</script>
<template>
  <nav>
    <img :src="Menu" alt="NavBar" @click="changeMenu" />
    <article v-if="toggleMenu" class="art">
      <router-link to="/">Home</router-link>
      <router-link to="/characters">Characters</router-link>
      <router-link to="/comics">Comics</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/series">Series</router-link>
    </article>
  </nav>
</template>
<style scoped>
nav {
  background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(66, 29, 29, 1) 25%,
    rgba(101, 20, 20, 1) 48%,
    rgba(60, 23, 23, 1) 75%,
    rgba(25, 25, 25, 1) 100%
  );
  top: 105vh;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
}
img {
  margin-right: 7vw;
}
img:hover {
  scale: 1.1;
}
img:focus {
  scale: 0.9;
}
.art {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 0;
  align-items: center;
  width: 100%;
  height: 29.3vh;
}
.art a {
  text-align: center;
  padding: 1rem 0.5rem;
  font-size: 1.3rem;
  transition: all ease 0.5s;
  width: 100%;
}
.art a:hover {
  background-color: #ffffff06;
}
</style>
