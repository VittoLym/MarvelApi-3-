<script setup></script>
<template>
  <nav class="nav">
    <article>
      <router-link to="/">
        <p>Home</p>
      </router-link>
      <router-link to="/characters">
        <p>Characters</p>
      </router-link>
    </article>
    <article>
      <router-link to="/comics">
        <p>Comics</p>
      </router-link>
      <router-link to="/series">
        <p>Series</p>
      </router-link>
    </article>
  </nav>
</template>
<style scoped>
.nav {
  z-index: 100;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
  background-image: url(../assets/Marvel2Header.png);
  background-size: cover;
  background-position: left;
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
article a p {
  font-size: 1.4rem;
}

article a p:hover {
  color: #cecece;
}
@media (max-width: 800px) {
  .nav {
    display: none;
  }
}
</style>
