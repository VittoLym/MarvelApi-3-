<script setup></script>
<template>
  <header>
    <h1>Marvel Universe</h1>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  height: 100vh;
  background-image: url(../../public/wMarvel.webp);
  background-size: cover;
  background-position: center;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-bottom: #f90000 5px solid;
  margin-bottom: 5vh;
}
header h1 {
  margin: 3rem 0;
  text-align: center;
  font-size: 3rem;
  color: #ebebeb;
}
header ul {
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
}
header ul img {
  height: 40vh;
  width: 20vw;
  transition: all ease 0.5s;
  background-color: #242424a0;
  border-radius: 0.8rem;
}
header ul img:hover {
  scale: 1.2;
}
</style>
