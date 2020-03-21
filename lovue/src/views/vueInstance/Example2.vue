<template>
    <div>
        <div id="app">
            <h1>{{ msg }}</h1>
        </div>
        <div id="app-body">
            <h4>{{ title }}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'example1',
        data: function () {
            return {
                msg: '欢迎来到前端小课',
                title: "Vue 实例讲解"
            }
        }
    }
</script>

<style scoped>

</style>