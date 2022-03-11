<template>
      <div class="section" v-click-outside="funcIsVisibleFalse">
        <p @click="funcIsVisible" class="title"> {{ textSelecteds }}</p>
        <div v-if="isVisible" class="options">
          <p 
          @click="choiceOption($event), makeActive({ id: option.value })" 
          class="optionText" 
          :class="{ 'active-class': selectedOption === option.value }" 
          v-for="(option, index) of options"
          :key="index"
          :option="option" >
            {{ option.text }}
          </p>
        </div>
      </div>
</template>

<script>
import vClickOutside from "click-outside-vue3"

export default {
    directives: {
      clickOutside: vClickOutside.directive
    },
    name: 'my-section',
    props: {
      options:{
        type: Array,
      },
      selected:{
        type: String,
      }
    },
    data() {
      return {
        isVisible: false,
        textSelecteds: this.selected,
        isActive: false,
        selectedOption: null // Важно
      }
    },
    methods: {  
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        },
        funcIsVisible(){
          this.isVisible = (this.isVisible === true) ? false : true
        },
        choiceOption(option){
          this.textSelecteds = option.srcElement.innerText;
          this.$emit('update', option);

          
          let nameFilter = option.srcElement.__vnode.props.key
          this.$emit('filters', nameFilter);
          this.isVisible = false;
          this.isActive = true;
        },
        makeActive ({ id }) {
          this.selectedOption = id
        },
        funcIsVisibleFalse(){
          this.isVisible = false
        }
    },
    computed: {
     
    }
}
</script>
<style>
    .section{
      width: 150px;
      font-size: 18px;
      position: relative;
      cursor: pointer;
    }

    .title{
      border-bottom: 2px solid #f5d5d5;
      width: 60%;
    }

    .options{
      position: left;
      border-radius: 5px;
      box-shadow: 0 0 5px 1px;
      width: 100%;
      position: absolute;
      padding: 10px 0px;
      margin: 0 auto;
      background-color: white;
    }

    .optionText{
      padding: 10px 0px;
      margin: 0px;
      font-size: 18px;
      width: 100%;
    }

    .optionText:hover{
      background-color: purple;
      transition: .3s;
    }

    .active-class{
      background-color: purple;
    }
</style>