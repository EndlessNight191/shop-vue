<template>
    <div class="dialog" v-if="show" @click.stop="hideDIalog">
        <div @click.stop class="dialog__content">
            <my-input placeholder="Название" v-model="element.name" type="text"></my-input>
            <my-input placeholder="Цена" v-model.number.trim="element.price" type="text"></my-input>
            <my-button @click="Create">Создать</my-button>
            <my-section :selected="sort" @update="thisElementType" :options="$store.state.options" ></my-section>
            <h3 v-if="visible" style="color: purple; margin: 10% auto; width: 50%; font-size: 25px">Выберите все пункты!!!</h3>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            element: {
                name: '',
                price: '',
                type: '',
                quantity: 1,
            },
            sort: "Выбрать",
            visible: false,
        }
    },
    name: 'my-dialog',
    props: {
        show:{
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideDIalog(){
            this.$emit('update:show', false)
        },
        thisElementType(option){
            this.element.type = option.srcElement.innerText
        },
        Create(){
            if(this.element.name && this.element.price && this.element.type) {
              this.visible = false
              this.$emit('update:show', false);

              this.element.id = Date.now();
              this.$emit('create', this.element);
              this.element = {
                name: '',
                price: '',
                type: '',
              }
            }else{
              this.visible = true
            }
        },
    },
}
</script>

<style>
    .dialog{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }

    .dialog__content{
        margin: auto;
        background: white;
        border-radius: 10px;
        min-height: 50px;
        min-width: 200px;
        width: 40%;
        height: 50%;
        padding: 15px;
    }

    @media (max-width: 900px){
      .dialog__content{
        width: 60%;
      }
    }

</style>