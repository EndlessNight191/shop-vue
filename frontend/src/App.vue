<template>
    <div class="body__main">{{local}}
        <div class="main__basket">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>



export default {
    data() {
        return {
            arr: this.$store.state.elementBaskets
        }
    },
    components:{
        
    },
    mounted() {
        this.$nextTick(function () {
            if(localStorage.array) {
              this.$store.state.elementBaskets = JSON.parse(localStorage.getItem('array'))
            }else{
              this.$store.state.elementBaskets.length = 0
            }
        })
    },
    computed: {
        local(){
            if(this.$store.state.elementBaskets.length > 0){
                localStorage.array = JSON.stringify(this.$store.state.elementBaskets)
            }
            return ''
        }
    }, /// localstorage - Можно было бы сделать в action, vuex
}
</script>

<style>

html body{
    padding: 0px;
    margin: 0px;
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    width: 100%;
    background-color: #d9c3c3;
}

.body__main{
        background-color: #d9c3c3;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        min-width: 90vw;
        display: flex;
        justify-content: center;
    }

.main__basket{
        margin: 2% 0px;
        padding: 2rem 2rem;
        min-height: 85vh;
        min-width: 85vw;
        width: 90%;
        background-color: white;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Ubuntu', sans-serif;
    }

@media (min-width: 300px) and (max-width: 1199px) {
  .body__main{
    background-color: #d9c3c3;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    min-height: 100vh;
    /*min-width: 90vw;*/
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }

  .main__basket{
    font-size: 14px;
  }
}
</style>
