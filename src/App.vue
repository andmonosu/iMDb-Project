

<template>
  <header class="header">
    <SearchBar></SearchBar>
    <NavBar class="header--nav"></NavBar>
  </header>

  <main class="main">
    <RouterView></RouterView>
  </main>

  <footer class="footer">
      © IMDb Project made by Andreu Montagut & Laura Pernía
  </footer>
</template>

<script setup lang="ts">

import SearchBar from "@/components/SearchBar.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="scss">

.header{
  grid-area: header;
  background-color: lightskyblue;
  min-height: 10vh;
  margin:-1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 101vw;
  top: 0.5rem;
  z-index: 100;

  .header--nav{
    height: 5rem;
    display: flex;
    align-items: center;
  }
}

.main{
  grid-area: main;
  min-height: 80vh;
}

.footer{
  grid-area: footer;
  background-color: lightskyblue;
  height: 3rem;
  margin-left:-1rem;
  margin-right: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}


.sticky + .header{


}

</style>
