<template>
    <div>
        <div class="content-box">
            <div v-for="(alist, index) in lists" :key="index">
                <h2>{{ alist.title }}</h2>
                <div class="list-box">
                    <div v-for="(item, index) in alist.datas" :key="index" class="item-box">
                        <div class="user-info-box">
                            <div class="avtar"></div>
                            <p v-if="item.author" class="nickname">{{ item.author.nickname }}</p>
                        </div>
                        <h3 class="item-title">{{ item.title }}</h3>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Top',
        props: {
            msg: String,
            lists: Array
        }
    }
</script>

<style scoped>
    .content-box {
        box-sizing: border-box;
        display: flex;
        padding: 40px;
        width: 100%;
        background-color: #fafafa;
        flex-direction: column;
        align-items: flex-start;
    }
    .list-box {
        display: flex;
        margin: 10px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }
    .item-box {
        position: relative;
        cursor: pointer;
        margin-right: 10px;
        margin-bottom: 10px;
        width: 300px;
        height: 200px;
        flex-grow: 0;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 5px;
    }
    .user-info-box {
        position: relative;
        margin: 16px;
    }
    .nickname {
        position: absolute;
        color: 000;
        left: 60px;
        top: 0;
    }
    .avtar {
        width: 45px;
        height: 45px;
        background-color: white;
        border-radius: 22.5px;
        background-image: url('../assets/logo.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    h2 {
        text-align: left;
        margin-left: 10px;
    }
    .item-title {
        color: #000;
        font-size: 25px;
        padding: 10px;
    }
</style>