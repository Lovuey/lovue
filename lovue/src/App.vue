<template>
  <div id="app">
    <Top v-bind:msg="title" />
    <Content v-bind:lists="lists"></Content>
  </div>
</template>

<script>
  import Top from './components/top.vue';
  import Content from './components/content.vue';

  export default {
    name: 'App',
    components: {
      Top,
      Content
    },
    data: function () {
      return {
        title: 'Vue 虚拟实验室 · 实例',
        lists: [
          {
            title: '渲染模板',
            datas: [
              {
                title: 'for 列表渲染'
              },
              {
                title: 'if 条件渲染'
              }
            ]
          },
          {
            title: '组件',
            datas: [
              {
                title: '基本使用'
              },
              {
                title: '高级'
              }
            ]
          },
        ]
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