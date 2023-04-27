<template>
  <div class="card">
    <button v-if="!isLiked" v-on:click="likeButtonClicked" class="card--likeBtn">
        <i class="fa-regular fa-heart" style="color: #6e4736; height: 1.5rem;"/>
      </button>
    <button v-if="isLiked" v-on:click="likeButtonClicked" class="card--likeBtn">
        <i class="fa-solid fa-heart" style="color: #6e4736; height: 1.5rem;"/>
    </button>
    <img  class="card--image" v-bind:src="film.poster">
    <p class="card--title">
      {{ film.primaryTitle }}<br>
      Genre: {{ genres }}<br>
      Year: {{ film.startYear }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {Film} from "@/types";
import { saveLikedFilm } from "../utils";

export default defineComponent ({
  name: "CardComponent",
  data(){
    return{
      isLiked: false,
      genres:""
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
    for(const genre of (this.film as Film).genres){
      this.genres +=genre+", "
    }
  }
})
</script>

<style lang="scss">
  .card{
    width: min-content;
    display: grid;
    z-index: 10;
    align-self: center;
    justify-self: center;
    background-color:#DFC49B;
    border-radius: 1rem;
    border:0.25rem solid #B07156;

    .card--image{
      display: grid;
      position:relative;
      height: 15rem;
      width: 10rem;
      z-index: 4;
      align-self: flex-start;
      justify-self: flex-start;
      top:-0.15rem;
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
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
      display: grid;
      position: relative;
      align-self: flex-end;
      justify-self: center;
      justify-content: center;
      align-items: center;
      width: 8rem;
      height: 8rem;
      z-index: 2;
      overflow: scroll;
      text-align: center;
      color: #B07156;
    }

  }

  .card:hover{
    z-index: 99;
    .card--image{
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