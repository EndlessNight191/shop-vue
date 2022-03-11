<template>
    <my-navigation></my-navigation>
    <div class="form">
        <div class="pod__form">
            <h1>Авторизация</h1>
            <my-input v-model="authorization.login" class="one" placeholder="Логин" :error-messages="nameErrors"></my-input>
            <my-input v-model="authorization.password" class="one" placeholder="Пороль"></my-input>
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
                if (!this.v$.$error) { // if ANY fail validation
                    alert('Form successfully submitted.')
                } else {
                alert('Form failed validation')
                }
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
        height: 80vh;
        width: 40%;
        background-color: blanchedalmond;
        border-radius: 15px;
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
        margin-top: 50px;
    }
    
    .two{
        margin-top: 40px;
        width: 80%;
    }
</style>