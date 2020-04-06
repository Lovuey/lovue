<template>
    <div id="app">
        <h3>{{ msg }}</h3>
        <h4>下面是 Vue 实例的声明周期函数</h4>
        <p v-for="(item, index) in lists" :key="index">调用了 {{ index + 1 }}: - {{ item }}</p>
    </div>
</template>

<script>
    export default {
        name: 'example3',
        data: function () {
            return {
                lists: []
            }
        },
        beforeCreated: function () {
            this.lists.push('beforeCreated');
            console.log('life beforeCreated');
        },
        created: function () {
            this.lists.push('created');
            console.log('life created');
        },
        beforeMount: function () {
            this.lists.push('beforeMount');
            console.log('life beforeMount');
        },
        mounted: function () {
            this.lists.push('mounted');
            console.log('life mounted');
        },
        beforeUpdate: function () {
            console.log('life beforeUpdate');
        },
        updated: function () {
            console.log('life updated');
        },
        beforeDestory: function () {
            console.log('life beforeDestory');
        },
        destroyed: function () {
            console.log('life destroyed');
        }
    }
</script>

<style lang="less" scoped>

</style>