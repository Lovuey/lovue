import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import VueInstance from '@/views/vueInstance/VueInstance.vue'
import Filter from '@/views/filter/Filter.vue'
import ComponentBasics from '@/views/componentBasics/ComponentBasics.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // Vue 实例 demo
    {
        path: '/vueinstance',
        name: 'VueInstance',
        component: VueInstance
    },
    // 过滤器 demo
    {
        path: '/filter',
        name: 'Filter',
        component: Filter
    },
    // 组件基础 demo
    {
        path: '/componentBasics',
        name: 'ComponentBasics',
        component: ComponentBasics
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
