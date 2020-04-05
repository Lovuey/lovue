<template>
    <div>
        <div v-for="(item, index) in lists" :key="index">
            <p>{{ item.name }}：{{ item | priceShow }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'example1',
        data: function () {
            return {
                lists: [
                    {'name': '苹果', price: 998},
                    {'name': '西红柿', price: 668},
                    {'name': '西瓜', price: 100}
                ],
            }
        },
        filters: {
            priceShow(item) {
                return '￥' + item.price / 100 + '元';
            }
        }
    }
</script>

<style scoped>

</style>