<template>
  <div id="app">
    <Top v-bind:msg="title" />
    <Content v-bind:lists="lists"></Content>
  </div>
</template>

<script>
  import Top from './components/top.vue';
  import Content from './components/content.vue';
  import content from './const/content.js'

  export default {
    name: 'App',
    components: {
      Top,
      Content
    },
    data: function () {
      return {
        title: 'Vue 虚拟实验室 · 实例',
        lists: content.lists
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>