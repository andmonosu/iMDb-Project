<template>
  <input id="menu-toggle" type="checkbox" />
  <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
  <ul class="header--navbar">
    <li  class="header--navitem"><router-link to="/" v-on:click="catalogNotClicked">Home</router-link></li>
    <li  class="header--navitem"><router-link to="/catalog">Catalog</router-link></li>
    <li  class="header--navitem"><router-link to="/daily" v-on:click="catalogNotClicked">Daily Film</router-link></li>
    <li  class="header--navitem"><router-link to="/liked" v-on:click="catalogNotClicked"> <i class="fa-solid fa-heart" style="color: blanchedalmond; height: 1.5rem;"/></router-link></li>
  </ul>
  <nav>

  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "NavBar",
  methods:{
    catalogNotClicked():void{
      this.$store.commit('setIsCatalog',false)
    },
  }
})
</script>

<style lang="scss">

  .header--navbar{
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;



    .header--navitem{
      height: 5rem;
      display: flex;
      align-items: center;
      padding-right: 1.5rem;
      margin-right: 2.5rem;

      a{
        color:blanchedalmond
      }

      a:link{
        color:blanchedalmond;
        font-style: normal;
        text-decoration: none;
      }

      a:visited{
        color:blanchedalmond;
        font-style: normal;
        text-decoration: none;
      }


    }
  }

  .header--navbar > li {
    margin: 0 1rem;
    overflow: hidden;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 1rem;
  }
  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: blanchedalmond;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: '';
    margin-top: -8px;
  }

  .menu-button::after {
    content: '';
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: blanchedalmond;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }


  #menu-toggle{
    display: none;
  }

  .menu-button-container{
    display: none;
  }
  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }
    .header--navbar {
      position: absolute;
      top: 0;
      margin-top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .header--navbar li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .header--navbar li {
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .header--navbar > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #B07156;
    }
  }


</style>