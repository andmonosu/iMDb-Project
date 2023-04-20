<template>
  <div class="select-container">
    <label for="gender">Filter by {{ type.toLowerCase() }}</label>
    <select name="filter" id="filter" v-on:change="changeSelectValue">
      <option>None</option>
      <option v-for="option in options" v-bind:value="option.value">{{ option.value }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CustomSelect",
  props:{
    options: Array,
    type:String
  },
  methods:{
    changeSelectValue(event:Event):void{
      this.$emit('getValue',(event.target as HTMLInputElement).value);
    },
  },
})
</script>

<style lang="scss">
.select-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.5rem;
  margin-bottom: 0.5rem;

  select {
    background-color: blanchedalmond;
    color: #B07156;
    padding: 0.25rem;
    width: 80%;
    height: 100%;
    border: none;
    box-shadow: 0 5px 25px #B07156;
    outline: none;
    option {
      padding: 30px;
    }
  }
}

.select-container::before {
  width: 20%;
  height: 100%;
  text-align: center;
  color: #B07156;
  background-color: blanchedalmond;
}

.select-container:hover::before {
  color: blanchedalmond;
  background-color: #B07156;
}
</style>