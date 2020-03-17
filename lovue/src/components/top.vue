<template>
    <div class="top-box">
        <img class="logo-icon" src="../assets/logo.png" alt=""><span class="logo-title">Lovue</span>
        <h1 class="nav-title">{{ msg }}</h1>
        <div class="nav">
            <a class="nav-link" href='/about' >
                <img class="nav-icon" src="../assets/icon/about.png" /><span>关于</span>
            </a>
            <a class="nav-link" href='https://github.com/Lovuey/lovue' target="_blank">
                <img class="nav-icon" src="../assets/icon/github.png" /><span>GITHUB</span>
            </a>
        </div>
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
        background-color: #fff;
        border-bottom: #f5f5f5 1px solid;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 999;
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
    .logo-title {
        padding-left: 8px;
        font-size: 18px;
    }
    .nav {
        font-size: 16px;
        margin: 3px 40px 0 0;
        flex-grow: 0;
        display: flex;
    }
    .nav-icon {
        width: 20px;
        height: 20px;
        margin: 0 5px;
    }
    .nav-link {
        margin: 0 5px;
        white-space: nowrap;
        text-decoration: none;
        color: #2c3e50;
        display: flex;
        border-bottom: 3px solid rgba(255,255,255,0);
    }
    .nav-link:hover {
        border-bottom: 3px solid #42b983;
    }
</style>