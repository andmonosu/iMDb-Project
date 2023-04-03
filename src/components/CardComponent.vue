<template>
  <div class="card">
    <button v-on:click="likeButtonClicked" class="card--likeBtn" id="notLiked">
        <i class="fa-regular fa-heart" style="color: #000000; height: 1.5rem;"/>
      </button>
    <button v-on:click="likeButtonClicked" class="card--likeBtn" id="liked">
        <i class="fa-solid fa-heart" style="color: #000000; height: 1.5rem;"/>
    </button>
    <img  class="card--image" src="https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg?w=640">
    <p class="card--title">
      Film Title
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
  methods:{
    likeButtonClicked():void{
      const isLiked:boolean = this.isLiked;
      let likeIcon:HTMLButtonElement= (document.getElementById("liked") as HTMLButtonElement);
      let notLikeIcon:HTMLButtonElement= (document.getElementById("notLiked") as HTMLButtonElement);
      if(isLiked){
        likeIcon.style.display = "block";
        notLikeIcon.style.display = "none"
      }else{
        notLikeIcon.style.display = "block";
        likeIcon.style.display = "none"
      }
      this.isLiked = !isLiked;
    },
  },
})
</script>

<style lang="scss">
  .card{
    background-color: white;
    width: max-content;
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
      position: relative;
      align-self: flex-end;
      justify-self: center;
      margin-top:-2rem;
      z-index: 2;
    }

  }

  .card:hover{
    z-index: 100;
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