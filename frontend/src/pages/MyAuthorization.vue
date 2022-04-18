<template>
    <my-navigation></my-navigation>
    <div class="form">
        <div class="pod__form">
            <h1>Авторизация</h1>
            <my-input v-model="authorization.login" class="one" placeholder="Логин" :error-messages="nameErrors"></my-input>
            <span v-if="v$.authorization.login.$model == '' && v$.authorization.login.$error" class="span__auth">Это поле обязательно к заполнению</span>
            <span v-if="v$.authorization.login.$error && v$.authorization.login.$model.length > 0" class="span__auth">Неверный логин или пороль</span>
            <my-input v-model="authorization.password" class="one" placeholder="Пороль"></my-input>
            <span v-if="v$.authorization.password.$model == '' && v$.authorization.password.$error" class="span__auth">Это поле обязательно к заполнению</span>
            <span v-if="v$.authorization.password.$error && v$.authorization.password.$model.length > 0" class="span__auth">Неверный логин или пороль</span>
            <my-button @click="submitForm" class="two">Войти</my-button>
            <strong class='span__auth2'>Если вы еще не зарегестрировались, то  <router-link to="/MyRegistration"><h4 class="href">зарегестрируйтесь</h4></router-link></strong>
        </div>
    </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, minLength} from '@vuelidate/validators'

export default {
    data(){
        return{
            v$: useValidate(),
            authorization:{
                login: '',
                password: '',
            },
        }
    },
    methods: {
        submitForm() {
                this.v$.$validate() // checks all inputs
/*                if (!this.v$.$error) { // if ANY fail validation
                    alert('Form successfully submitted.')
                } else {
                alert('Form failed validation')
                }*/
        }
    },
    validations() {
        return {
            authorization: {
                login: {required, minLength: minLength(5)},
                password: {required, minLength: minLength(5)}, 
            },
        }
    },
   
}
</script>
<style>
    .form{
        margin: 20px auto;
        min-height: 80vh;
        width: 50%;
        background-color: blanchedalmond;
        border-radius: 15px;
        display: flex;
        align-items: center;
    }

    .href{
        color: brown;
    }

    .span__auth{
      font-size: 14px;
      font-weight: 500;
      color: brown;
      width: 75%;
      margin: 0 auto;
    }

    .span__auth2{
      font-size: 14px;
      font-weight: 500;
      color: black;
      float: left;
      width: 75%;
      margin: 0 auto;
    }

    .pod__form{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .one{
        margin-top: 50px;
    }
    
    .two{
        margin-top: 40px;
        width: 80%;
    }

    @media (min-width: 300px) and (max-width: 1000px) {
      .form{
        min-width: 80%;
      }

    }
</style>