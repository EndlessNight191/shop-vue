<template>
    <my-navigation></my-navigation>
        <div class="form">
            <div class="pod__form">
                <h1>Регистрация</h1>
                <my-input v-model="registr.pochta" class="one" placeholder="Почта"></my-input>
                    <span v-if="v$.registr.pochta.$model == ''" class="span__auth">Это поле обязательно к заполнению</span>
                    <span v-if="v$.registr.pochta.$error" class="span__auth">неверно введеный адрес почты</span>
                <my-input v-model="registr.login" class="one" placeholder="Логин"></my-input>
                    <span v-if="v$.registr.login.$model == ''" class="span__auth">Это поле обязательно к заполнению</span>
                    <span v-if="v$.registr.login.$error" class="span__auth">В этом поле возможно указывать только английские буквы и цыфры</span>
                <my-input v-model="registr.password" class="one" placeholder="Пороль"></my-input>
                    <span v-if="v$.registr.password.$model == ''" class="span__auth">Это поле обязательно к заполнению</span>
                    <span v-if="v$.registr.password.$error" class="span__auth">В этом поле возможно указывать только английские буквы и цыфры</span>
                <my-input v-model="registr.againPassword" class="one" placeholder="Введите пороль повторно"></my-input>
                    <span v-if="v$.registr.againPassword.$model == ''" class="span__auth">Это поле обязательно к заполнению</span>
                    <span v-if="v$.registr.againPassword.$error" class="span__auth">Пороли должны совпадать</span>
                <my-button @click="submitForm" class="two">Регистрация</my-button>
                <strong class="span__auth2">Если вы уже зарегестрировались, то выполните <router-link to="/MyAuthorization"><h4 class="href">вход</h4></router-link></strong>
            </div>
        </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, minLength, email, } from '@vuelidate/validators'

export default {
    data(){
        return{
            v$: useValidate(),
            registr:{
                pochta: '',
                login: '',
                password: '',
                againPassword: '',
            }
        }
    },
    methods: {
        submitForm() {
                this.v$.$validate() // checks all inputs
                if (!this.v$.$error) { // if ANY fail validation
                    alert('Form successfully submitted.')
                } else {
                alert('Form failed validation')
                }
        }
    },
    validations() {
        return {
            registr:{
                pochta: {required, email}, 
                login: {required, minLength: minLength(5), },
                password: {required, minLength: minLength(5), },
                againPassword: {required, minLength: minLength(5), },
            }
        }
    },
   
}
</script>
<style>
    .form{
        margin: 20px auto;
        height: 80vh;
        width: 40%;
        background-color: blanchedalmond;
        border-radius: 15px;
    }

    .span__auth{
        font-size: 14px;
        font-weight: 500;
        color: purple;
        float: left;
    }

    .span__auth2{
        font-size: 14px;
        font-weight: 500;
        color: black;
        float: left;
    }

    .href{
        color: brown;
    }

    .pod__form{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .one{
        margin-top: 1rem;
    }
    
    .two{
        margin-top: 40px;
        width: 80%;
    }
</style>