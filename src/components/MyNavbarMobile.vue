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
      <router-link to="/">Characters</router-link>
      <router-link to="/">Comics</router-link>
      <router-link to="/">Events</router-link>
      <router-link to="/">Series</router-link>
    </article>
  </nav>
</template>
<style scoped>
nav {
  top: 105vh;
  position: absolute;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1rem;
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
  margin: 2rem 0;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(66, 29, 29, 1) 25%,
    rgba(101, 20, 20, 1) 48%,
    rgba(60, 23, 23, 1) 75%,
    rgba(25, 25, 25, 1) 100%
  );
}
.art a {
  text-align: start;
  padding: 1rem 0.5rem;
}
</style>
