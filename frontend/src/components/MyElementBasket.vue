<template>
    <div class="main__form__basket">
        <div class="header">
            <strong style="font-size: 28px; display: flex; align-items: center;"><img class="img__basket" src="@/assets/basket.svg" alt="">Коризна</strong>
            <my-button @click="deleteBasket" class="clear__btn"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5H4.16667H17.5" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.33337 9.16667V14.1667" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.6666 9.16667V14.1667" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg> Очистить корзину</my-button>
        </div>
      <transition-group name="list">
        <ElementBasket :element="element" v-for="element in $store.state.elementBaskets" :key="element.id"/>
      </transition-group>
        <footer class="footer">
            <div class="footer__body">
                <div>Всего пицц: <strong style="color: purple">{{$store.getters.countBasket}} шт.</strong></div>
                <div style="display: flex; justify-content: space-between; align-items: center;">Сумма заказа: <div class="textTotalPriceBasket">{{$store.getters.priceBasket}} ₽</div></div>
            </div>
            <div class="footer__body">
                <router-link to="/"><my-button>Вернуться назад</my-button></router-link> 
                <router-link to="/"><my-button>Оплатить сейчас</my-button></router-link>
            </div>
        </footer>
    </div>
</template>

<script>
import ElementBasket from '@/components/ElementBasket.vue'

export default {
    components:{
        ElementBasket
    },
    methods: {
        deleteBasket(){
            this.$store.commit('deleteBasket')
            localStorage.clear()
        }
    },
    
}
</script>

<style>

    .img__basket{
        height: 35px;
        width: 35px;
    }

    .clear__btn{
        display: flex; 
        align-items: center;
        padding: 13px 20px;
        background: none;
        color: black;
        border: 2px solid black;
        border-radius: 50px;
        cursor: pointer;
        font-size: 14px;
    }

    .clear__btn:hover{
        color: purple;
        border-radius: 50px;
        border: 2px solid purple;
        transition: .2s;
    }

    .clear__btn:hover path{
        stroke: purple;
        transition: .2s;
    }

    .svg__basket{
        width: 1.1rem; 
        height: 1.1rem;
        fill: black;
    }

    .main__form__basket{
        width: 60%;
        background-color: white;
        margin-top: 50px;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5%;
    }

    .footer{
        display: flex;
        flex-direction: column;
        margin-top: 5%;
    }

    .footer__body{
        margin-bottom: 4%;
        display: flex;
        justify-content: space-between;
    }

    .textTotalPriceBasket{
      margin-left: 10px;
      font-size: 26px;
      color: purple;
    }
    
    @media (max-width: 1050px) {
      .main__form__basket{
        width: 90%;
      }

      .textTotalPriceBasket{
        font-size: 20px;
      }

      .clear__btn{
        padding: 10px 15px;
      }
    }

    .list-item {
      display: inline-block;
      margin-right: 10px;
    }
    .list-enter-active,
    .list-leave-active {
      transition: all 1s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(130px);
    }
</style>