<template>
    <div>
        <div class="content-box">
            <block v-for="alist in lists" :key='alist'>
                <h2>{{ alist.title }}</h2>
                <div class="list-box">
                    <div v-for="item in alist.datas" :key='item' class="item-box">
                        <h3 class="item-title">{{ item.title }}</h3>
                    </div>
                </div>
            </block>

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
        display: flex;
        margin: 40px;
        width: 100%;
        background-color: #fff;
        flex-direction: column;
        align-items: flex-start;
    }
    .list-box {
        display: flex;
        margin: 10px;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .item-box {
        display: flex;
        margin-right: 10px;
        width: 200px;
        height: 120px;
        flex-grow: 0;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        background-color: #3E60C1;
        border-radius: 5px;
    }
    h2 {
        text-align: left;
    }
    .item-title {
        color: #fff;
        font-size: 25px;
    }
</style>