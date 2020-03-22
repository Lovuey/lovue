<template>
    <div id="app">
        <top v-bind:msg="title"/>
        <div class="app-content">
            <!-- 这个地方用来渲染路由相关的组件 -->
            <router-view />
        </div>
        <buttom></buttom>
    </div>
</template>

<script>
    // Top 为顶部的导航栏
    import Top from '@/components/Top.vue';
    import Buttom from '@/components/Bottom.vue';

    export default {
        name: 'App',
        components: {
            'top': Top,
            'buttom': Buttom
        },
        data: function () {
            return {
                title: 'Vue 虚拟实验室'
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: #f6f8f9;
    }
    .app-content {
        box-sizing: border-box;
        max-width: 1256px;
        margin: 0 auto;
        min-height: 700px;
        margin-top: 40px;
        margin-top: 75px;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>