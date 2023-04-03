<template>
  <h1>Trending Films</h1>
  <FilmsCarousel></FilmsCarousel>
  <h1>Recent Films</h1>
  <FilmsCarousel></FilmsCarousel>
</template>

<script>
import FilmsCarousel from "@/components/FilmsCarousel.vue";

export default {
  name: "Home",
  components: {FilmsCarousel}
}
</script>

<style scoped>

</style>