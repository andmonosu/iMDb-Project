<template>
  <aside class="filters">
    <label for="gender">Filtrar por género</label>
    <select name="filter" id="filter">
      <option>Acción</option>
      <option>Terror</option>
      <option>Aventura</option>
      <option>Comedia</option>
      <option>Romántica</option>
    </select>
    <div class="slidecontainer">
      Filtrar por duración
      <input type="range" min="70" max="180" value="120" class="slider" id="myRange">
    </div>
  </aside>
</template>

<script>
export default {
  name: "FilterList"
}
</script>

<style lang="scss">
  .filters{
    background-color: lightskyblue;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    padding: 0.5rem;
    align-self: center;
    justify-self: center;
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