import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import VueInstance from '../views/vueInstance/VueInstance.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/vueinstance',
        name: 'VueInstance',
        component: VueInstance
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
