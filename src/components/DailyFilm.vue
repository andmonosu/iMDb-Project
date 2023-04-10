<template>
  <div class="daily--container">
    <div class="daily--questioner">
      <CardComponent/>
      <div class="daily--valoration">
        <h2>
          Valora la pelicula
        </h2>
        <input type="range" min="0" max="10" value="5" class="slider" id="myRange">
        <button class="daily--valoration__nextFilmBtn">
            Next Film
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "DailyFilm",
  components: {CardComponent}
}
</script>

<style lang="scss">
  .daily--container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    .daily--questioner{
      background-color: lightskyblue;
      border-radius: 1rem;
      display: grid;
      grid-template-rows: 20rem;
      grid-template-columns: 20rem auto;
      grid-template-areas:
      "card-container valoration-container"
      ;
      padding:2rem;
    }

    .daily--valoration{
      grid-area: valoration-container;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
      align-items: center;

      .daily--valoration__nextFilmBtn{
        margin-top: 0.5rem;
        width: fit-content;
        height: 5vh;
        border-radius: 1rem;
        color: white;
        background-color: deepskyblue;
        border-color: white;
      }
    }
    @media only screen and (max-width: 600px) {
      .daily--questioner{
        grid-template-columns: auto;
        grid-template-rows: 15.5rem auto;
        grid-template-areas:
        "card-container"
        "valoration-container"
      ;
      }
      .daily--valoration {
        justify-content: flex-end;
      }

    }
  }



</style>