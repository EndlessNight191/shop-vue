<template>
    <div class="body__main1">
        <div class="basket__one">
            <img src="@/assets/pizzaElement.png" alt="" class="img1">
            <div class="font" style="width: 200px">{{element.name}}</div>
        </div>
        <div class="mobile__elementBasket">
            <button @click="minusCount" style="padding: 4px 12px 7px 12px" class="basket__btn font">-</button>
            <strong class="font">{{element.quantity}}</strong>
            <button @click="plusCount" class="basket__btn font ">+</button>
        </div>
        <strong class="font">{{element.price * element.quantity}} ₽</strong>
        <button @click="deleteCount" class="basket__btn font">⛌</button>
    </div>
</template>

<script>


export default {
    data(){
        return{
            post: this.element
        }
    },
    props: {
        element:{
            type: Object
        }
    },
    methods: {
        plusCount(){
            this.$store.commit('plusCount', this.post)
        },
        minusCount(){
            this.$store.commit('minusCount', this.post)
        },
        deleteCount(){
            this.$store.commit('deleteCount', this.post)
        }
    },
    computed: {
      imgUrl(){
        // alert(this.post.src)
        return require(`C:\\Users\\влад\\OneDrive\\Рабочий стол\\пед-проект\\frontend\\src\\assets\\${this.post.src}`)
      }
    },
}
</script>
<style>
    .body__main1{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0px;
        margin: 20px 0px 0px 0px;
        align-items: center;
    }

    .basket__btn{
        padding: 5px 10px 6px 10px;
        border: 1px solid black;
        background-color: white;
        border-radius: 50%;
        margin: 10px;
        cursor: pointer;
    }

    .basket__btn:hover{
        padding: 5px 10px 6px 10px;
        background-color: black;
        border: 1px solid black;
        border-radius: 50%;
        color: white;
        margin: 5px;
        cursor: pointer;
        transition: .2s;
    }

    .basket__one{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .font{
        font-size: 20px;
        margin: 5px;
    }

    @media (min-width: 551px) and (max-width: 670px) {
      .basket__one{
        width: 35%;
      }
    }

    @media (max-width: 550px) {
      .font{
        font-size: 16px;
      }

      .mobile__elementBasket{
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .body__main1{
        display: flex;
        justify-content: space-between;
      }

      .basket__one{
        width: 45%;
      }

    }


</style>