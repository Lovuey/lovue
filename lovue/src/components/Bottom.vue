<template>
    <div class="bottom-box">
        <div class="nav">
            <a class="nav-link" href="/recommand">
                <img class="nav-icon" src="../assets/icon/recommand.png" /><span
                    >资源推荐</span
                >
            </a>
            <a class="nav-link" href="/join">
                <img class="nav-icon" src="../assets/icon/join.png" /><span
                    >加入我们</span
                >
            </a>
        </div>
        <div>
            <h4 class="nav-title">MIT License</h4>
            <h5 class="nav-title">Copyright (c) 2020 Lovuey</h5>
        </div>
        <div class="nav">
            <a class="nav-link" href="https://cn.vuejs.org/" target="_blank">
                <img class="nav-icon" src="../assets/icon/link.png" /> Vuejs.org
            </a>
            <a
                class="nav-link nav-link-popup"
                href="https://mp.weixin.qq.com/s/If3hxqrCQVvD6-MfcHRWhQ"
            >
                <img class="nav-icon" src="../assets/icon/wechat.png" /> 公众号
                <img class="nav-popup" src="../assets/icon/qrcode.png" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Bottom"
};
</script>

<style lang="less" scoped>
.bottom-box {
    padding: 40px;
    /* height: 40px; */
    background-color: #f6f8f9;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.nav {
    font-size: 16px;
    display: flex;
    justify-content: center;
}
.nav-title {
    margin: 10px 0;
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
    padding: 8px 0 6px 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
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
@media screen and (max-width: 480px) {
    .bottom-box {
        padding: 40px 20px;
    }
    .bottom-box div:nth-child(1) {
        width: 50%;
        justify-content: flex-start;
    }
    .bottom-box div:nth-child(2) {
        width: 100%;
    }
    .bottom-box div:nth-child(3) {
        width: 50%;
        justify-content: flex-end;
    }
    .bottom-box :nth-child(2) {
        order: 3;
    }
    .bottom-box :nth-child(3) {
        order: 2;
    }
    .nav-icon {
        display: none;
    }
}
</style>