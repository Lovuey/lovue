<template>
    <div>
        <div id="app">
            <p>{{ msg }}</p>
        </div>
        <div id="app-body">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'example1',
        data: function () {
            return {
                msg: '欢迎来到 Vue 虚拟实验室，我是第一个实例',
                title: "我是第二个实例"
            }
        }
    }
</script>

<style lang="less" scoped>

</style>