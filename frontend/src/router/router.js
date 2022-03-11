import MyBasket from '@/pages/MyBasket';
import ShopMain from '@/components/ShopMain';
import MyAuthorization from '@/pages/MyAuthorization.vue'
import MyRegistration from '@/pages/MyRegistration.vue'
import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: '/MyBasket',
        component: MyBasket
    },
    {
        path: '/',
        component: ShopMain
    },
    {
        path: '/MyAuthorization',
        component: MyAuthorization
    },
    {
        path: '/MyRegistration',
        component: MyRegistration
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;