<template>
  <section class="sliding">
    <div class="scroll">
      <button class="left">
        <i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i>
      </button>
      <button class="right">
        <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>
      </button>
      <div class="item-list">
        <CardComponent v-for="film in films" :film="film" />
      </div>
    </div>


  </section>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {defineComponent} from "vue";

export default defineComponent({
  name: "FilmsCarousel",
  components: {FontAwesomeIcon, CardComponent},
  props:{
    films:Array
  }
})
</script>

<style lang="scss">
  .sliding{
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    position:relative;
    max-width: 99vw;
  }

  .scroll {
    display: flex;
    flex: 100%;
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: 15.5rem;
    max-width: 99vw;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
  }

  .scroll > * {
    flex: 0 0 auto;
  }
  .item-list{
    display: flex;
    flex-flow: row nowrap;
    gap: 0.1rem;
    margin:1rem;
  }

  .right {
    position: absolute;
    right: 1rem;
    z-index:100;
    border-style: none;
    background-color: transparent;
  }

  .left {
    position: absolute;
    left: 1rem;
    z-index:101;
    border-style: none;
    background-color: transparent;
  }

</style>