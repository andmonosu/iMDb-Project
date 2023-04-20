<template>
  <div v-if="isCatalog" class="header--search">
    <input type="text" class="header--searchbar" placeholder="Search film..." v-on:input="input">
    <i class="fa-solid fa-magnifying-glass" style="color: #B07156;"></i>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapState} from "vuex";
export default defineComponent({
  name: "SearchBar",
  data(){
    return{
      typing:false,
      value:""
    }
  },
  methods:{
    input(event:Event):void{
      this.typing=true;
      this.search(event);
    },search(event:Event):void{
        setTimeout(()=>{
          this.typing=false;
          this.value=(event.target as HTMLInputElement).value;
            }
      ,1000);
    }
  },watch:{
    value(value):void{
      if(!this.typing){
        this.$store.commit('search/setTitle',value)
        this.$store.dispatch('search/fetchData');
      }
    }
  },
  computed:{
    ...mapState({
      isCatalog:"isCatalog"
    })
  }
})
</script>

<style lang="scss">
  .header--searchbar{
    margin-left: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    border-style: none;
    padding-right: 1.75rem;
    padding-left: 0.5rem;
    margin-right: -1.55rem;
    background-color: blanchedalmond;
    color:#B07156;
  }

  .header--searchbar::placeholder{
    color: #B07156;
  }

  .header--search{
    position: absolute;
    left: 0;
  }




img{
  height: 1.25rem;
  position:relative;
  margin-bottom: -0.35rem;
}
</style>