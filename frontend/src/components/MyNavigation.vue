<template>
    <div class="nav">
        <router-link to="/">
            <div class="header__element">
                <img src="@/assets/pizza.svg" alt="pizza">
                <div>
                    <h1 class="h1">Vue Pizza</h1>
                    <h3 class="h2">интерактивная пицца с компонентным подходом</h3>
                </div>
            </div>
        </router-link>
        <router-link to="/MyAuthorization"><img src="@/assets/profile.svg" alt=""></router-link>
        <router-link to="/MyBasket">
            <button class="nav__router">
                <strong class="border">{{$store.getters.priceBasket}} Р</strong>
                <strong> <img style="width: 1rem; height: 1rem;" src="@/assets/basket.svg" alt=""> {{$store.getters.countBasket}}</strong>
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "my-navigation"
}
</script>

<style>
    .nav{
        padding-bottom: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid gray;
        height: 15%;
        width: 100%;
    }

    .nav__router{
        padding: 15px 25px;
        border:1px solid aliceblue;
        background-color: aliceblue;
        border-radius: 50px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 15px 0px 0px;
        cursor: pointer;
        
    }

    .border{
        height: 100%;
        text-decoration: none;
        padding-right: 35px;
    }

    img{
        height: 4rem;
        width: 4rem;
    }

    .header__element{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        margin: 0px;
        text-decoration: none;
    }

    .h1{
        color: purple;
        font-size: 30px;
        padding: 0px;
        margin: 0px 0px 0px 15px;
        text-decoration: none;
        display: inline-block;
    }

    .h2{
        color: purple;
        font-size: 18px;
        padding: 0px;
        margin: 0px 0px 0px 15px;
        text-decoration: none;
        display: block;
    }
</style>