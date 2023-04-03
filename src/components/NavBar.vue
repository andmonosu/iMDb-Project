<template>
  <nav>
    <ul class="header--navbar">
      <li @click="clickedLink" class="active header--navitem"><router-link to="/">Home</router-link></li>
      <li @click="clickedLink" class="header--navitem"><router-link to="/catalog">Catalog</router-link></li>
      <li @click="clickedLink" class="header--navitem"><router-link to="/daily">Daily Film</router-link></li>
      <li @click="clickedLink" class="header--navitem"><router-link to="/liked"><img class="header--navitem__likedFilm" src="https://cdn-icons-png.flaticon.com/512/105/105220.png" alt="Liked films"></router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "NavBar",
  methods:{
    clickedLink(event:Event):void{
      let activeItem:HTMLLIElement = (document.getElementsByClassName("active")[0] as HTMLLIElement);
      activeItem.classList.remove("active");
      let componentClicked:HTMLLIElement = (event.target as HTMLLIElement);
      componentClicked.className = "active header--navitem";
    }
  }
})
</script>

<style lang="scss">
  .header--navbar{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 23.5rem;

    .active{
      background-color: deepskyblue;
    }

    .header--navitem{
      height: 5rem;
      display: flex;
      align-items: center;

      padding-right: 1.5rem;
      padding-left: 1.5rem;

      a:link{
        color: black;
        font-style: normal;
        text-decoration: none;
      }

      a:visited{
        color: black;
        font-style: normal;
        text-decoration: none;
      }


    }
  }

</style>