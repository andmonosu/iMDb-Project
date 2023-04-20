<template>
  <div class="container">
  <CardComponent v-for="film in films" :film="film" :liked="true"/>
  </div>
</template>

<script lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent( {
  name: "LikedFilms",
  components: {CardComponent},
  computed:{
    ...mapState('likedFilms', {
      films: "films",
    })
  }
})
</script>

<style lang="scss">
  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 0.5rem;
    margin:0.5rem;
  }
</style>