<template>
    <div id="app">
        <Top v-bind:msg="title" />
        <div class="app-content">
            <router-view />
        </div>
    </div>
</template>

<script>
    import Top from './components/top.vue';

    export default {
        name: 'App',
        components: {
            Top
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
        margin-bottom: 80px;
        margin-top: 100px;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>