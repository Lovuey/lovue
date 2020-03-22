<template>
    <div class="post-footer">
        <p class="post-link">参考：</p>
        <div v-for="(item, index) in article.footer" :key="index">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'articleFooter',
    props: {
        article: Object
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/article.less";
</style>