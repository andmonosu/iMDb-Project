<template>
  <div class="card">
    <button v-if="!isLiked" v-on:click="likeButtonClicked" class="card--likeBtn">
        <i class="fa-regular fa-heart" style="color: #000000; height: 1.5rem;"/>
      </button>
    <button v-if="isLiked" v-on:click="likeButtonClicked" class="card--likeBtn">
        <i class="fa-solid fa-heart" style="color: #000000; height: 1.5rem;"/>
    </button>
    <img  class="card--image" v-bind:src="film.poster">
    <p class="card--title">
      {{ film.primaryTitle }}<br>
      Genre: {{ film.genres[0] }}<br>
      Year: {{ film.startYear }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
  name: "CardComponent",
  data(){
    return{
      isLiked: false
    }
  },
  props:{
    film:Object,
    liked: Boolean,
  },
  methods:{
    likeButtonClicked():void{
      const isLiked:boolean = this.isLiked;
      if(!isLiked){
        this.$store.commit('likedFilms/addFilm',this.film);
      }else{
        this.$store.commit('likedFilms/removeFilm',this.film);
      }
      this.isLiked = !isLiked;
    },
  },
  mounted():void{
    this.isLiked = this.liked
  }
})
</script>

<style lang="scss">
  .card{
    background-color: white;
    width: min-content;
    display: grid;
    z-index: 10;
    align-self: center;
    justify-self: center;

    .card--image{
      display: grid;
      position:relative;
      height: 14rem;
      z-index: 4;
      align-self: center;
      justify-self: center;
    }

    .card--likeBtn{
      display: flex;
      position: relative;
      margin: 0.75rem 0.5rem -2.25rem;
      z-index: 3;
      justify-self: flex-end;
      background-color: transparent;
      border-style: none;

    }

    .card--title{
      display: flex;
      position: absolute;
      align-self: flex-end;
      justify-self: center;
      justify-content: center;
      align-items: center;
      width: 8rem;
      z-index: 2;
      overflow: scroll;
      text-align: center;
    }

  }

  .card:hover{
    z-index: 99;
    .card--image{
      height: 15.5rem;
      opacity: 0.4;
      transition: all 0.5s ease;
      z-index: 1;
      position: relative;
    }

  }

  #liked{
    display:none
  }
  #notLiked{
    display: block;
  }
</style>