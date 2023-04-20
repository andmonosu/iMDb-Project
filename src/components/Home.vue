<template>
  <h1 class="home-title">Trending Films</h1>
    <FilmsCarousel :films="trendingFilms"></FilmsCarousel>
  <h1 class="home-title">Recent Films</h1>
    <FilmsCarousel :films="recentFilms"></FilmsCarousel>
</template>

<script lang="ts">
import FilmsCarousel from "@/components/FilmsCarousel.vue";
import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent({
  name: "Home",
  components: {FilmsCarousel},
  computed:{
    ...mapState('film', {
      recentFilms: "recentFilms",
      trendingFilms: "trendingFilms",
    })
  },mounted():void{
    this.$store.dispatch('search/fetchTrending',"")
    this.$store.dispatch('search/fetchRecent',"")
  }
})
</script>

<style lang="scss">
  .home-title{
    color: #B07156;
    display: block;
    text-align: center;
  }
</style>