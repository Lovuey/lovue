<template>
    <div>
        <div id="example-app-1">欢迎来到 {{ msg }}</div>
    </div>
</template>

<script>
    export default {
        name: 'example1',
        data: function () {
            return {
                msg: '前端小课',
            }
        }
    }
</script>

<style scoped>

</style>