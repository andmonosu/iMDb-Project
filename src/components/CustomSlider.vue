<template>
  <div class="slider-container">
    <input type="range" v-bind:min="min" v-bind:max="max" v-bind:value="inputValue" class="slider" id="myRange"
           ref="mySlider" v-on:input="input">
    <p>{{ inputValue }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "CustomSlider",
  data(){
    return{
      sliderValue:0,
      inputValue:0,
      typing:false,
    }
  },
  methods:{
    input(event:Event):void{
      this.typing=true;
      this.changeSliderValue(event);
    },
    changeSliderValue(event:Event):void{
      let slider:HTMLInputElement = event.target as HTMLInputElement;
      this.inputValue=Number((event.target as HTMLInputElement).value);
      slider.style.backgroundSize = ((this.inputValue - (this.min as number)) * 100 / ((this.max as number) - (this.min as number))) + '% 100%';
      setTimeout(()=>{
            this.typing=false;
            this.sliderValue=Number((event.target as HTMLInputElement).value);
          }
          ,3500);
      },
  },
  mounted():void{
    this.inputValue = this.value as number;
    let slider:HTMLInputElement = this.$refs.mySlider as HTMLInputElement;
    slider.style.backgroundSize = ((this.inputValue - (this.min as number)) * 100 / ((this.max as number) - (this.min as number))) + '% 100%';
  },
  props:{
    min:Number,
    max:Number,
    value:Number,
  },watch: {
    sliderValue(value): void {
      if (!this.typing) {
        this.$emit('getValue', value);
      }
    }
  }

})
</script>

<style lang="scss">
.slider-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  input{
    -webkit-appearance: none;
    color:#B07156;
    height: 50%;
    border-radius: 1.25rem;
    background-color: blanchedalmond;
    background-image: linear-gradient(#6e4736, #6e4736);
    background-repeat: no-repeat;
    border: 0.1rem solid blanchedalmond;
    width: 80%;
  }
  /* Input Thumb */
  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: ew-resize;
    background: #B07156;
    transition: background .3s ease-in-out;
  }

  input::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: ew-resize;
    background: #B07156;
    transition: background .3s ease-in-out;
  }

  input::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    cursor: ew-resize;
    border-radius: 50%;
    background: #B07156;
    transition: background .3s ease-in-out;
  }
  input::-webkit-slider-runnable-track  {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  p{
    color:white;
    margin-left: 0.25rem;
  }

}
</style>