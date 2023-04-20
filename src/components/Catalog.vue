<template>
  <div class="layout">
    <div class="layout--filters">
      <FilterList></FilterList>
    </div>
    <div class="layout--content">
      <CardComponent v-for="film in films" :film="film" :liked="false"/>
    </div>
  </div>
</template>

<script lang="ts">
import FilterList from "@/components/FilterList.vue";
import CardComponent from "@/components/CardComponent.vue";
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "Catalog",
  components: {CardComponent, FilterList},
  computed:{
    ...mapState('film', {
      films: "films",
    })
  },
  mounted(){
    this.$store.commit('setIsCatalog',true);
    this.$store.dispatch('search/fetchDataFiltered')

  }
})
</script>

<style lang="scss">
  .layout{
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 5fr;
    grid-template-areas:
    "filters-container cards-container"
    ;
    max-width: 98.5vw;
    grid-column-gap: 1.5rem;

    .layout--filters{
      grid-area: filters-container;
    }
    .layout--content{
      grid-area: cards-container;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-wrap: wrap;
      row-gap: 1rem;
      column-gap: 1rem;
      padding: 1rem;
    }

  }

  @media only screen and (max-width: 560px) {
    .layout{
      grid-template-columns: auto;
      grid-row-gap: 1.5rem;
      grid-template-areas:
        "filters-container"
        "cards-container"
      ;
      .layout--content{
        flex-direction: column;
      }
    }

  }





</style>