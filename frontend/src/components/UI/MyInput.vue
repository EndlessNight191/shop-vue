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
        padding: 2%;
        margin: 0.6rem;
    }
</style>