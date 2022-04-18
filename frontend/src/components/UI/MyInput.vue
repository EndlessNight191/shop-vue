<template>
        <input @input="updateInput" :value="modelValue" type="text" class="inp">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>
<style>
    .inp{
        height: 1rem;
        width: 75%;
        outline: none;
        padding: 2%;
        margin: 0.6rem;
        border: 2px solid black;
        border-radius: 25px;
        transition: .5s;
    }

    .inp:focus{
      outline: none;
      height: 1rem;
      width: 75%;
      padding: 2%;
      margin: 0.6rem;
      border: 2px solid purple;
      border-radius: 25px;
    }

    @media (min-width: 550px) and (max-width: 900px) {
      .inp{
        padding: 3%;
      }
    }

    @media (max-width: 540px) {
      .inp{
        padding: 6%;
      }
    }

</style>