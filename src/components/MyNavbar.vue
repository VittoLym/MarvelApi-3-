<script setup></script>
<template>
  <nav class="nav">
    <article>
      <p>Home</p>
      <p>Characters</p>
    </article>
    <article>
      <p>Comics</p>
      <p>Movies</p>
    </article>
  </nav>
</template>
<style scoped>
.nav {
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
  background-image: url(../assets/Marvel2Header.png);
  background-size: cover;
  background-position: center;
  background-position-x: -40px;
  border-bottom: #f90000 5px solid;
}
article {
  margin: 0 2rem;
  width: 28vw;
  display: flex;
  align-items: end;
  justify-content: space-between;
}
article p {
  font-size: 1.4rem;
  width: 50%;
}
</style>
