<template>
  <div class="layout">
    <div class="layout--filters">
      <FilterList></FilterList>
    </div>
    <div class="layout--content">
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </div>
  </div>
</template>

<script>
import FilterList from "@/components/FilterList.vue";
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "Catalog",
  components: {CardComponent, FilterList}
}
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
      display: grid;
      grid-row-gap: 0.5rem;
      grid-column-gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-auto-rows: 15.5rem;
    }

    @media only screen and (max-width: 1000px) {
      .layout--content{
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    @media only screen and (max-width: 750px) {
      .layout--content {
        grid-template-columns: 1fr 1fr;
      }
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
    }

  }





</style>