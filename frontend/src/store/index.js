import {createStore} from 'vuex';

export default createStore({
    state:{
        posts: [
            {id: 0, name: "Пицца два сыра", price: 200, type: "Сырная", quantity: 1, src: "@/assets/pizzaElement.png"},
            {id: 1, name: "Ципленок барбекю", price: 100, type: "Мясная", quantity: 1, src: "@/assets/pizzaElement.png"},
            {id: 3, name: "Пепперони", price: 100, type: "Мясная", quantity: 1, src: "@/assets/pizzaElement.png"},
            {id: 4, name: "Маргарита", price: 100, type: "Вегетарианская", quantity: 1, src: "@/assets/pizzaElement.png"},
            {id: 5, name: "Чизбургер-пицца", price: 200, type: "Сырная", quantity: 1, src: "@/assets/pizzaElement.png"},
            {id: 6, name: "Крэйзи пепперони", price: 100, type: "Мясная", quantity: 1, src: "@/assets/pizzaElement.png"},
            {id: 7, name: "Двойной бекон", price: 100, type: "Мясная", quantity: 1, src: "@/assets/pizzaElement.png"},
            {id: 8, name: "Овощи и грибы", price: 100, type: "Вегетарианская", quantity: 1, src: "@/assets/pizzaElement.png"},
        ],
        options: [
            { text: 'Сырная', value: 'Сырная' },
            { text: 'Мясная', value: 'Мясная' },
            { text: 'Вегетарианская', value: 'Вегетарианская' },
          ],
        filter: [
            { text: 'По умолчанию', value: 'popul' },
            { text: 'Цене', value: 'price' },
            { text: 'Алфавиту', value: 'alfavit' },
        ],
        elementBaskets: [],
    },
    getters:{
        filtersPosts : state => nameFilter => {

            if(nameFilter == "1"){
              let filterPosts = state.posts.sort(function (a, b){
                if (a.price > b.price) return 1; // если первое значение больше второго
                if (a.price == b.price) return 0; // если равны
                if (a.price < b.price) return -1; // если первое значение меньше второго
              })
            return filterPosts

            }else if(nameFilter == "0"){
                let filterPosts = state.posts.sort(function (a, b){
                    if (a.id > b.id) return 1; // если первое значение больше второго
                    if (a.id == b.id) return 0; // если равны
                    if (a.id < b.id) return -1; // если первое значение меньше второго
                  })
                return filterPosts

            }else if(nameFilter == "2"){
                let filterPosts = state.posts.sort(function (a, b){
                    if (a.name > b.name) return 1; // если первое значение больше второго
                    if (a.name == b.name) return 0; // если равны
                    if (a.name < b.name) return -1; // если первое значение меньше второго
                  })
                return filterPosts

            }

        },
        filersPost__btn : state => nameFilter => {
            console.log(nameFilter)
            let filterPostsBtn = state.posts.filter(post => post.type == nameFilter)
            return filterPostsBtn
        },
        priceBasket : state => {
            let priceBasket = 0
            let element
            for(element of state.elementBaskets){
                priceBasket += element.price * element.quantity
            }
            return priceBasket
        },
        countBasket : state => {
            let countBasket = 0
            let element
            for(element of state.elementBaskets){
                countBasket += element.quantity
            }
            return countBasket
        },
        countPost: state => post => {
            let produkt
            let count = -1

            if(state.elementBaskets.length > 0){
                for(produkt of state.elementBaskets){
                    count++
                    if(post.id == produkt.id){
                            let countPost = state.elementBaskets[count].quantity
                            return countPost
                    }
                }
            }else{return}
        },
    },
    mutations:{
        pushingPost(state, post){
            state.posts.push(post)
        },
        pushingBasket(state, post){
            let produkt
            let count = -1
            let truth = false

            if(state.elementBaskets.length > 0){
                for(produkt of state.elementBaskets){
                    count++
                    if(post.id == produkt.id){
                            state.elementBaskets[count].quantity++
                            truth = true
                    }
                }

                if(!truth) {state.elementBaskets.push(post)}

            }else if(state.elementBaskets.length === 0){
                state.elementBaskets.push(post)
            }
        },
        deleteBasket(state){
            let produkt

            for(produkt in state.elementBaskets){
                state.elementBaskets[produkt].quantity = 1
            }

            state.elementBaskets.length = 0
        },
        plusCount(state, post){
            let produkt
            let count = -1

            for(produkt of state.elementBaskets){
                count++
                if(post.id == produkt.id){
                        state.elementBaskets[count].quantity++
                }
            }
        },
        minusCount(state, post){
            let produkt
            let count = -1

            for(produkt of state.elementBaskets){
                count++
                if(post.id == produkt.id){
                        if(state.elementBaskets[count].quantity > 1){
                            state.elementBaskets[count].quantity--
                        }else{return}
                }
            }
        },
        deleteCount(state, post){
            let produkt
            let count = -1

            for(produkt of state.elementBaskets){
                count++
                if(post.id == produkt.id){
                        state.elementBaskets[count].quantity = 1
                        state.elementBaskets.splice(count, 1)
                }
            }
        },
    },
    actions:{

    },
    modules:{

    }
})