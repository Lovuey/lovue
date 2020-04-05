<template>
    <!-- 首页内容区域 -->
    <div class="content-box">
        <div v-for="(alist, index) in lists" :key="index">
            <h2>{{ alist.title }}</h2>
            <div class="list-box">
                <div v-for="(item, index) in alist.datas" :key="index" class="item-box">
                    <div class="card-box" v-on:click="cardClicked(item)">
                        <div v-if="item.author" class="user-info-box">
                            <img :src="item.author.avatar" class="avtar">
                            <p class="nickname">{{ item.author.nickname }}</p>
                        </div>
                        <h3 class="item-title">{{ item.title }}</h3>
                        <p class="item-des">{{ item.des }}</p>
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
        },
        data() {
            return {

            }
        },
        methods: {
            cardClicked(item) {
                console.log('clicked', item);
                if (!item || !item.route) {
                    console.log('请在 const/content.js 中添加 route 参数');
                    return;
                }
                this.$router.push({
                    path: item.route
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .content-box {
        display: flex;
        background-color: #fff;
        flex-direction: column;
        padding: 20px 15px;
    }
    .list-box {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }
    .item-box {
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        margin: 0;
        padding: 0;
        padding: 16px 12px;
        color: rgba(0, 0, 0, 0.65);
        width: 20%;
        height: 250px;
        flex-grow: 0;
        flex-shrink: 0;
        background-color: #fff;
    }
    .card-box:hover {
        box-shadow: 2px 2px 20px #ccc;
    }
    .card-box {
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid #f0f0f0;
        height: 100%;
        transition: all 0.3s;
    }
    .user-info-box {
        position: relative;
        margin: 12px;
    }
    .nickname {
        position: absolute;
        color: 000;
        left: 60px;
        top: 0;
    }
    .avtar {
        position: absolute;
        left: 0;
        top: 0;
        width: 45px;
        height: 45px;
        background-color: white;
        border-radius: 22.5px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    h2 {
        color: #314659;
        text-align: left;
        margin-left: 12px;
        font-weight: bold;
    }
    .item-title {
        color: #0d1a26;
        font-size: 16px;
        padding: 10px;
        margin-top: 80px;
    }
    .item-des {
        color: #697b8c;
        font-size: 14px;
        text-align: left;
        padding: 0px 12px;
    }
    @media screen and (max-width: 1200px) {
        .item-box {
            width: 25%;
        }
    }
    @media screen and (max-width: 992px) {
        .item-box {
            width: 33.33%;
        }
    }
    @media screen and (max-width: 768px) {
        .item-box {
            width: 50%;
        }
    }
    @media screen and (max-width: 480px) {
        .item-box {
            width: 100%;
            height: 160px;
        }
        .item-title {
            margin-top: 18px;
            text-align: right;
        }
        .item-des {
            white-space: nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
        }
        h2 {
            margin: 0;
            text-align: center;
        }
    }
</style>