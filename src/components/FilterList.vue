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
      sortValues:[{value:'startYear_desc'},{value:'startYear_asc'},{value:'averageRating_desc'},{value:'averageRating_asc'}]
    }
  },
  methods:{
    setGender(event:string):void{
      this.$store.commit("search/setGenresFilter",event);
      setTimeout(this.$store.dispatch("search/fetchDataFiltered"),1000);
    },
    setType(event:string):void{
      this.$store.commit("search/setTypeFilter",event);
      setTimeout(this.$store.dispatch("search/fetchDataFiltered"),1000);
    },
    setMinDuration(event:number):void{
      this.$store.commit("search/setMinDurationFilter",event);
      setTimeout(this.$store.dispatch("search/fetchDataFiltered"),1000);
    },
    setMaxDuration(event:number):void{
      this.$store.commit("search/setMaxDurationFilter",event);
      setTimeout(this.$store.dispatch("search/fetchDataFiltered"),1000);

    },
    setMinYear(event:number):void{
      this.$store.commit("search/setMinYearFilter",event);
      setTimeout(this.$store.dispatch("search/fetchDataFiltered"),1000);
    },
    setMaxYear(event:number):void{
      this.$store.commit("search/setMaxYearFilter",event);
      setTimeout(this.$store.dispatch("search/fetchDataFiltered"),1000);

    },
    setMinScore(event:number):void{
      this.$store.commit("search/setMinScoreFilter",event);
      setTimeout(this.$store.dispatch("search/fetchDataFiltered"),1000);
    },
    setSortFilter(event:string):void{
      this.$store.commit("search/setSortFilter", event);
      setTimeout(this.$store.dispatch("search/fetchDataFiltered"),1000);
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

  @media onlyscreen and (max-width: 560px) {
    .filters{

    }

  }


</style>