import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// 创建一个 Vue 实例
const vm = new Vue({
    // 提供一个渲染函数
    // render: h => h(App),
    render: function (h) {
        return h(App);
    },
    // 使用路由
    router
});
// 把 Vue 实例挂载到 ID 选择器 #app 上
// mount 为 Vue 实例的函数
vm.$mount('#app');
