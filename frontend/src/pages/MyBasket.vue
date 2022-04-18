<template>
    <my-navigation/>
    <div class="mainBasket" >
      <transition name="list">
        <div class="basket__nan" v-if="$store.state.elementBaskets.length === 0">
            <div style='display: flex; align-items: center; justify-content: center;'>Корзина пустая <img style='width: 3rem; height: 3rem;' src="@/assets/smile.svg" alt=""></div>
            <p>Вы еще не заказывали товар, перейдите на главную страницу</p>
            <img src="@/assets/shopping.svg" style='height: 15rem; width: 15rem; margin: 10px auto 25px;' alt="">
            <router-link to="/" style='margin: 0 auto;'><my-button>Вернуться назад</my-button></router-link>
        </div>
      </transition>
      <transition name="fade">
        <MyElementBasket v-if="$store.state.elementBaskets.length > 0"/>
        </transition>
    </div>
</template>
<script>
import MyElementBasket from '@/components/MyElementBasket.vue'

export default {
    components: {
        MyElementBasket
    }
}
</script>
<style>
    .mainBasket{
        display: flex;
        justify-content: center;
        min-height: 500px;
        width: 100%;
    }


    .basket__nan{
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 25px;
    }

    .fade-item {
      display: inline-block;
    }
    .fade-enter-active,
    .fade-leave-active {
      position: absolute;
      transition: all .8s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
      position: absolute;
      opacity: 0;
      transform: translateX(200px);
    }

    .list-item {
      display: inline-block;
    }
    .list-enter-active,
    .list-leave-active {
      transition: all .8s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(200px);
    }
</style>