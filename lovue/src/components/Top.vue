<template>
    <div class="top-box">
        <a class="nav" href="./">
            <div class="nav">
                <img class="logo-icon" src="../assets/logo.png" alt="" />
                <span class="logo-title">Lovue</span>
            </div>
        </a>
        <h1 class="nav-title">{{ msg }}</h1>
        <div class="nav">
            <a class="nav-link" href="/about">
                <img class="nav-icon" src="../assets/icon/about.png" /><span
                    >关于</span
                >
            </a>
            <a
                class="nav-link"
                href="https://github.com/Lovuey/lovue"
                target="_blank"
            >
                <img class="nav-icon" src="../assets/icon/github.png" /><span
                    >GitHub</span
                >
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Top",
    props: {
        msg: String
    }
};
</script>

<style lang="less" scoped>
.top-box {
    padding: 0 40px;
    height: 70px;
    background-color: #fff;
    border-bottom: #f5f5f5 1px solid;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* width: 100%; */
    z-index: 999;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo-icon {
    width: 35px;
    height: 35px;
}
.nav-title {
    font-size: 24px;
}
.logo-title {
    padding-left: 8px;
    font-size: 16px;
}
.nav {
    font-size: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #2c3e50;
}
.nav-icon {
    width: 20px;
    height: 20px;
    margin: 0 5px;
}
.nav-link {
    margin: 0 5px;
    padding: 8px 0 6px 0;
    white-space: nowrap;
    text-decoration: none;
    color: #2c3e50;
    display: flex;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
}
.nav-link:hover {
    border-bottom: 2px solid #42b983;
}
@media screen and (max-width: 480px) {
    .top-box {
        padding: 0 20px;
    }
    .nav-title {
        visibility: hidden;
        width: 0;
    }
}
</style>