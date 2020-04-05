<template>
    <div id="app">
        <top v-bind:msg="title" />
        <div class="app-content">
            <!-- 这个地方用来渲染路由相关的组件 -->
            <router-view />
        </div>
        <buttom></buttom>
    </div>
</template>

<script>
// Top 为顶部的导航栏
import Top from "@/components/Top.vue";
import Buttom from "@/components/Bottom.vue";
export default {
    name: "App",
    components: {
        top: Top,
        buttom: Buttom
    },
    data: function() {
        return {
            title: "Vue 虚拟实验室"
        };
    }
};
</script>

<style lang="less">
@import "./styles/lovue.less";
/* 一行代码置灰 */
/* html {
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
} */
</style>