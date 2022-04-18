<template>
    <div class="filter">
        <div class="typing">
            <my-button @click="filters__btn__all" class="btn_a" :class="{ active: isActiveOne }">Все</my-button>
            <my-button @click="filters__btn__fluid" class="btn_a" :class="{ active: isActiveTwo }">Сырная</my-button>
            <my-button @click="filters__btn__cartridges" class="btn_a" :class="{ active: isActiveThree }">Мясная</my-button>
            <my-button @click="filters__btn__systems" class="btn_a" :class="{ active: isActiveFour }">Вегетарианская</my-button>
        </div>
        <my-section @filters="filters" :options="$store.state.filter" :selected="sort"></my-section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sort: "Сортировать",
            isActiveOne: true,
            isActiveTwo: false,
            isActiveThree: false,
            isActiveFour: false,
        }
    },
    methods: {
        filters(nameFilter){
            this.$emit('filters', nameFilter);
        },
        filters__btn__all(){
            let newElements = this.$store.state.posts
            this.isActiveOne = true
            this.isActiveTwo = false
            this.isActiveThree = false
            this.isActiveFour = false
            this.$emit('filtersBtn', newElements);
        },
        filters__btn__fluid(){
            let nameFilter = "Сырная"
            let newElements = this.$store.getters.filersPost__btn(nameFilter)
            this.$emit('filtersBtn', newElements);
            this.isActiveOne = false
            this.isActiveTwo = true
            this.isActiveThree = false
            this.isActiveFour = false
        },
        filters__btn__cartridges(){
            let nameFilter = "Мясная"
            let newElements = this.$store.getters.filersPost__btn(nameFilter)
            this.$emit('filtersBtn', newElements);
            this.isActiveOne = false
            this.isActiveTwo = false
            this.isActiveThree = true
            this.isActiveFour = false
        },
        filters__btn__systems(){
            let nameFilter = "Вегетарианская"
            let newElements = this.$store.getters.filersPost__btn(nameFilter)
            this.$emit('filtersBtn', newElements);
            this.isActiveOne = false
            this.isActiveTwo = false
            this.isActiveThree = false
            this.isActiveFour = true
        },
    },
}
</script>

<style>
    .filter{
        display: flex;
        justify-content: space-between;
        width: 95%;
        align-items: center;
        margin: 0 auto;
    }

    .typing{
        display: flex;
        justify-content: space-between;
    }

    .btn_a{
        margin-top: 30px; 
        margin-right: 20px; 
        margin-bottom: 20px;
    }

    .active{
        background-color: black;
        color: white;
        border: 1px solid black;
    }

    .active:hover{
        background-color: black;
        color: white;
        border: 1px solid black;
    }

    @media (max-width: 708px) {
      .filter{
        display: flex;
        flex-direction: column ;
        align-items: flex-start;
      }

      .typing{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }

</style>