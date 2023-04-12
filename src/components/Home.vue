<template>
  <h1>Trending Films</h1>
  <FilmsCarousel :films="trendingFilms"></FilmsCarousel>
  <h1>Recent Films</h1>
  <FilmsCarousel :films="recentFilms"></FilmsCarousel>
</template>

<script>
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
  },mounted() {
    this.$store.dispatch('search/fetchTrending',"")
    this.$store.dispatch('search/fetchRecent',"")
  }
})
</script>

<style scoped>

</style>