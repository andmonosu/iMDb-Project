

<template>
  <header class="header">
    <SearchBar></SearchBar>
    <NavBar></NavBar>
  </header>

  <main class="main">
    <RouterView></RouterView>
  </main>

  <footer class="footer">
      <p class="footer-text">
        © IMDb Project made by Andreu Montagut & Laura Pernía
      </p>
  </footer>
</template>

<script setup lang="ts">

import SearchBar from "@/components/SearchBar.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="scss">

.header{
  grid-area: header;
  background-color: #B07156;
  min-height: 10vh;
  margin:-1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  width: 104vw;
  top: 0.5rem;
  z-index: 100;

}

.main{
  grid-area: main;
  min-height: 80vh;
}

.footer{
  grid-area: footer;
  background-color: #B07156;
  height: fit-content;
  width: 104vw;
  margin-left:-1rem;
  margin-right: -1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color:blanchedalmond;
  white-space: break-spaces;
  text-align: center;
}


.sticky + .header{


}

</style>
