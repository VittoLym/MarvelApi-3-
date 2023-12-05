<script setup>
import MyHeader from '../components/MyHeader.vue'
import MySearcher from '../components/MySearcher.vue'
import MyLayout from '../components/MyLayout.vue'
</script>
<template>
  <main>
    <MyHeader />
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
