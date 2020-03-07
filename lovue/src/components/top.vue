<template>
    <div class="top-box">
        <img class="logo-icon" src="../assets/logo.png" alt="">
        <h1 class="nav-title">{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Top',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .top-box {
        margin: 0;
        padding: 0;
        background-color: #fafafa;
        border-bottom: #f5f5f5 1px solid;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .logo-icon {
        width: 50px;
        height: 50px;
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 40px;
    }
    .nav-title {
        flex-grow: 1;
    }
</style>