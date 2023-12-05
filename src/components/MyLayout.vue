<script setup>
import MyCharacters from './MyCharacters.vue'
const titles = ['characters', 'comics', 'movies']
</script>
<template>
  <article class="title" v-for="i in titles" :key="i">
    <p>{{ i }}</p>
    <router-link :to="'/' + i">
      <span>See More</span>
    </router-link>
    <MyCharacters />
  </article>
</template>
<style scoped>
.title {
  display: flex;
  width: 75%;
  flex-wrap: wrap;
  align-items: center;
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
