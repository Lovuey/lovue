<template>
    <div class="bottom-box">
        <div class="nav">
            <a class="nav-link" href='/recommand' >
                <img class="nav-icon" src="../assets/icon/recommand.png"/><span>资源推荐</span>
            </a>
            <a class="nav-link" href='/join'>
                <img class="nav-icon" src="../assets/icon/join.png" /><span>加入我们</span>
            </a>
        </div>
        <div>
            <h4 class="nav-title">MIT License</h4>
            <h5 class="nav-title">Copyright (c) 2020 Lovuey</h5>
        </div>
        <div class="nav">
            <a class="nav-link" href='https://cn.vuejs.org/' target="_blank">
                <img class="nav-icon" src="../assets/icon/link.png" /><span>Vuejs.org</span>
            </a>
            <a class="nav-link nav-link-popup" href='https://mp.weixin.qq.com/s/If3hxqrCQVvD6-MfcHRWhQ'>
                <img class="nav-icon" src="../assets/icon/wechat.png" /><span>公众号</span>
                <img class="nav-popup" src="../assets/icon/qrcode.png" />
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Bottom'
    }
</script>

<style scoped>
    .bottom-box {
        margin: 40px 0;
        padding: 0;
        background-color: #f6f8f9;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .nav {
        font-size: 16px;
        margin: 3px 40px 0 40px;
        display: flex;
    }
    .nav-title {
        margin: 0;
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
        padding-bottom: 6px;
        border-bottom: 2px solid rgba(255,255,255,0);
        position: relative;
    }
    .nav-link:hover {
        border-bottom: 2px solid #42b983;
    }
    .nav-link-popup:hover .nav-popup {
        display: block;
        position: absolute;
        width: 100px;
        height: 100px;
        bottom: 25px;
        right: 0;
    }
    .nav-popup {
        display: none;
    }
</style>