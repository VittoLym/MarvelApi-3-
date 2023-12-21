<script setup>
import MyHeader from '../components/MyHeader.vue'
import MyNavbar from '../components/MyNavbar.vue'
import MySearcher from '../components/MySearcher.vue'
import MyLayout from '../components/MyLayout.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  addEventListener('scroll', changeVisibility)
})

onBeforeUnmount(() => {
  removeEventListener('scroll', changeVisibility)
})

const changeVisibility = () => {
  const header = headerRef.value.$el.getBoundingClientRect().top
  if (header >= -500) {
    vMenu.value = false
  } else if (header <= -530) {
    vMenu.value = true
  }
}
const vMenu = ref(false)
const headerRef = ref(null)
</script>
<template>
  <main>
    <MyHeader ref="headerRef" />
    <MyNavbar v-if="vMenu" />
    <MySearcher />
    <MyLayout />
  </main>
</template>
<style scoped>
main {
  height: 100%;
  width: 100%;
  font-family: monospace;
  color: #cecece;
  margin: 0;
  padding: 0;
  background: rgb(25, 25, 25);
  background: linear-gradient(
    90deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(66, 29, 29, 1) 25%,
    rgba(101, 20, 20, 1) 48%,
    rgba(60, 23, 23, 1) 75%,
    rgba(25, 25, 25, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
