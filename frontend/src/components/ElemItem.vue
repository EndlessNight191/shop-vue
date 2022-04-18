<template>
    <div class="card">
        <img class='imgs' src="@/assets/pizzaElement.png" alt="">
        <h3 style="text-align: center">{{post.name}}</h3>
        <strong>{{post.type}}</strong>
        <div class="card_bottom">
            <strong> От {{post.price}} ₽</strong>
            <my-button @click="addBasket" class="element__one">+ Добавить <div v-if="this.$store.getters.countPost(this.postBasket)" class="countPost">{{ $store.getters.countPost(this.postBasket) }}</div></my-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            postBasket: this.post
        }
    },
    props:{
        post: {
            type: Object,
        }
    },
    methods: {
        addBasket(){
            this.$store.commit('pushingBasket', this.postBasket)
        }
    },
}
</script>

<style>
    .card{
        width: 20%;
        height: 20%;
        margin: 10px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
    }

    @media (max-width: 650px){
      .card{
        width: 80%;
      }
    }

    @media (max-width: 1000px) and (min-width: 601px) {
      .card{
        width: 40%;
      }
    }

    @media (max-width: 1300px) and (min-width: 1001px) {
      .card{
        width: 28%;
      }
    }

    .card_bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .imgs{
        height: 60%;
        width: 70%;
    }

    .element__one{
        margin: 20px;
        margin-right: 0px;
        display: flex;
        justify-content: space-between;
    }

    .element__one:hover .countPost{
        margin-left: 5px;
        border-radius: 50%;
        color: purple;
        padding: 1px 6px 1px 6px;
        border: 1px solid purple;
        background-color: white;
    }

    .countPost{
        margin-left: 5px;
        border-radius: 50%;
        background-color: black;
        color: white;
        padding: 2px 7px 2px 7px; 
    }
</style>