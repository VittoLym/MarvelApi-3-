<script setup></script>
<template>
  <section>
    <p>Filtrar por...</p>
    <article class="Container">
      <article class="Filter">
        <label class="filter" for="seleccion">Characters, Comics, Movies or all</label>
        <select id="seleccion" name="seleccion">
          <option value=""></option>
          <option value="Characters">Characters</option>
          <option value="Comics">Comics</option>
          <option value="Movies">Movies</option>
          <option value="All">All</option>
        </select>
      </article>
      <article class="Filter">
        <label class="filter" for="seleccion">A-Z, Z-A</label>
        <select id="seleccion" name="seleccion">
          <option value=""></option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </article>
    </article>
  </section>
</template>
<style scoped>
section {
  width: 40vw;
  height: 10vw;
  background-color: #202020;
  border-radius: 0.6rem;
  border: 3px solid #f900006c;
}
section p {
  width: 90%;
  margin: 0.5rem auto;
}
.Container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.Filter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Filter select {
  width: min-content;
}
.filter {
  display: inline;
  width: 100%;
}
</style>
