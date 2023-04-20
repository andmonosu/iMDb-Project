<template>
  <div class="daily--container">
    <div class="daily--questioner">
      <CardComponent :film="film[0]"/>
      <div v-if="filtersSelected<=4" class="daily--valoration">
        <h2>
          Valora la pelicula
        </h2>
        <CustomSlider :min="0" :max="10" :value="5" v-on:get-value="changeValue"></CustomSlider>
        <button class="daily--valoration__nextFilmBtn" v-on:click="nextFilm">
            Next Film
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import {mapState} from "vuex";
import {defineComponent} from "vue";
import CustomSlider from "@/components/CustomSlider.vue";
import {addFilters, isFilterSelected} from "../utils";

export default defineComponent( {
  name: "DailyFilm",
  components: {CustomSlider, CardComponent},
  data(){
    return{
      filtersSelected:0,
      filters:[] as string[],
      sliderValue:0,
    }
  },
  computed:{
    ...mapState('film', {
      film: "dailyFilmQuestionary",
    })
  },created():void{
    this.$store.dispatch("search/fetchDaily",this.filters);
  },
  methods:{
    nextFilm():void{
      if(this.filtersSelected===0){
        this.filters = addFilters(this.sliderValue,this.filters,[this.film.genres[0],this.film.startYear]);
        this.filtersSelected = isFilterSelected(this.sliderValue,this.filtersSelected);
        this.$store.dispatch("search/fetchDaily",this.filters);
      }else if(this.filtersSelected===1){
        this.filters = addFilters(this.sliderValue,this.filters,[this.film.startYear,this.film.runtimeMinutes]);
        this.filtersSelected = isFilterSelected(this.sliderValue,this.filtersSelected);
        this.$store.dispatch("search/fetchDaily",this.filters);
      }else if(this.filtersSelected>=2&&this.filtersSelected<=3){
        this.filters = addFilters(this.sliderValue,this.filters,[this.film.runtimeMinutes,this.film.averageRating]);
        this.filtersSelected = isFilterSelected(this.sliderValue,this.filtersSelected);
        this.$store.dispatch("search/fetchDaily",this.filters);
      }else if(this.filtersSelected>=4){
        this.$store.dispatch("search/fetchDaily",this.filters);
      }
    },changeValue(event:number):void{
      this.sliderValue = event;
    }
  }
})
</script>

<style lang="scss">
  .daily--container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color:white;
    .daily--questioner{
      background-color: #B07156;
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
        background-color: sandybrown;
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