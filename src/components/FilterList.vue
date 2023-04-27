<template>
  <aside class="filters">
    <CustomSelect :type="genre" :options="genres" v-on:get-value="setGender"></CustomSelect>
    <CustomSelect :type="type" :options="types" v-on:get-value="setType"></CustomSelect>
    <div class="slidecontainer">
      Filter by  minimum duration
      <CustomSlider :min="60" :max="180" :value="120" v-on:get-value="setMinDuration"></CustomSlider>
      Filter by  maximum duration
      <CustomSlider :min="60" :max="180" :value="120" v-on:get-value="setMaxDuration"></CustomSlider>
      Filter by  minimum year
      <CustomSlider :min="1950" :max="2023" :value="2000" v-on:get-value="setMinYear"></CustomSlider>
      Filter by  maximum year
      <CustomSlider :min="1950" :max="2023" :value="2000" v-on:get-value="setMaxYear"></CustomSlider>
      Filter by  minimum score
      <CustomSlider :min="0" :max="10" :value="5" v-on:get-value="setMinScore"></CustomSlider>
    </div>
    <CustomSelect :type="sortLabel" :options="sortValues" v-on:get-value="setSortFilter"></CustomSelect>
  </aside>
</template>

<script lang="ts">
import CustomSlider from "@/components/CustomSlider.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent({
  name: "FilterList",
  components: {CustomSelect, CustomSlider},
  data(){
    return{
      genre:"Filter by genre",
      type: "Filter by type",
      sortLabel:"Sort by",
      sortValues:[{id:"Year descending",value:'startYear_desc'},{id:"Year ascending",value:'startYear_asc'},{id:"Average rating descending",value:'averageRating_desc'},{id:"Average rating ascending",value:'averageRating_asc'}]
    }
  },
  methods:{
    setGender(event:string):void{
      this.$store.commit("search/setGenresFilter",event);
      this.$store.dispatch("search/fetchDataFiltered");
    },
    setType(event:string):void{
      this.$store.commit("search/setTypeFilter",event);
      this.$store.dispatch("search/fetchDataFiltered");
    },
    setMinDuration(event:number):void{
      this.$store.commit("search/setMinDurationFilter",event);
      this.$store.dispatch("search/fetchDataFiltered");
    },
    setMaxDuration(event:number):void{
      this.$store.commit("search/setMaxDurationFilter",event);
      this.$store.dispatch("search/fetchDataFiltered");

    },
    setMinYear(event:number):void{
      this.$store.commit("search/setMinYearFilter",event);
      this.$store.dispatch("search/fetchDataFiltered");
    },
    setMaxYear(event:number):void{
      this.$store.commit("search/setMaxYearFilter",event);
      this.$store.dispatch("search/fetchDataFiltered");

    },
    setMinScore(event:number):void{
      this.$store.commit("search/setMinScoreFilter",event);
      this.$store.dispatch("search/fetchDataFiltered");
    },
    setSortFilter(event:string):void{
      this.$store.commit("search/setSortFilter", event);
      this.$store.dispatch("search/fetchDataFiltered");
    }
  },mounted(){
    this.$store.dispatch('search/fetchGenres');
    this.$store.dispatch('search/fetchTypes')
  },computed:{
    ...mapState('search', {
      genres: "genres",
      types:"types"
    })
  }
})
</script>

<style lang="scss">
  .filters{
    background-color: #B07156;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    padding: 0.5rem;
    align-self: center;
    justify-self: center;
    color:white;
  }
  .slidecontainer {
    margin-top: 0.5rem;
    width: 100%;
  }


  .slider {
    width: 100%;
    height: 25px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }


</style>