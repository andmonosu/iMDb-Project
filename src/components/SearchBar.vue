<template>
  <div class="header--search">
    <input type="text" class="header--searchbar" placeholder="Search film...">
    <img src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png" alt="search-icon">
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "SearchBar"
})
</script>

<style lang="scss">
  .header--searchbar{
    margin-left: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    border-style: none;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    margin-right: -1.55rem;
  }

  .header--search{
    position: absolute;
    left: 0;
  }

img{
  height: 1.25rem;
  position:relative;
  margin-bottom: -0.35rem;
}
</style>