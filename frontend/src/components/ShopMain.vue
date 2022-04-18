<template>
    <div class="s">
        <my-navigation></my-navigation>
        <ElementFilter @filters="filterElements" @filtersBtn="filterElementsBtn"></ElementFilter>
        <my-button @click="inVisible">Создать</my-button>
        <div class="main">
            <my-dialog @create="creaateElement" v-model:show="dialogVisible"/>
              <ElemItem :post="post" v-for="post in elements" :key="post.id"/>
        </div>
    </div>
</template>

<script>
import ElemItem from "@/components/ElemItem.vue"
import ElementFilter from "@/components/ElementFilter.vue"

export default {
    data(){
        return{
            show: false,
            dialogVisible: false,
            sort: "Сортировать",
            elements: this.$store.state.posts
        }
    },
    components:{
        ElemItem,
        ElementFilter,
    },
    methods: {
        inVisible(){
            this.dialogVisible = true
        },
        creaateElement(element){
            this.$store.commit('pushingPost', element)
        },
        filterElements(nameFilter){
            this.elements = this.$store.getters.filtersPosts(nameFilter)
            console.log(this.$store.getters.filtersPosts(nameFilter)) 
        },
        filterElementsBtn(newElements){
            this.elements = newElements
        }
    },
    computed: {
        
    }
}
</script>

<style>
    .main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .s{
        height: 100%;
        width: 100%;
    }

</style>