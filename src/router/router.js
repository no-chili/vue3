import { createRouter, createWebHistory } from 'vue-router';
import Tran from '../components/Tran.vue';
import TranGro from '../components/TranGro.vue';
import Obscure from '../components/Obscure.vue';
import Compont from '../components/Compont.vue';
import Menu from '../view/Menu.vue';
const routes = [
    { path: '/', component: Menu },
    { path: '/tran', component: Tran },
    { path: '/trangro', component: TranGro },
    { path: '/obscure', component: Obscure },
    { path: '/compon', component: Compont }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
