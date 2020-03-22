<template>
    <div class="post-header">
        <p class="title">{{ article.title }}</p>
        <p class="des">{{ article.subTitle }}</p>
        <p class="author">作者：<a :href="article.author.link" target="_blank">{{ article.author.name }}</a></p>
    </div>
</template>

<script>
export default {
    name: 'articleHeader',
    props: {
        article: Object
    }
}
</script>

<style lang="less" scoped>
@import "../../styles/article.less";
</style>