<template>
    <div id="filter">
        <!-- header -->
        <article-header :article="article"></article-header>
        <!-- body -->
        <div class="post-body">
            <div v-for="(node, index) in article.nodes" :key="index">
                <p v-if="node.type === 'text'" class="text">{{ node.con }}</p>
                <codehigh-light v-else-if="node.type === 'code'"
                    :code='node.con'
                    :lang='node.lang'
                    :dataLine = "node.stressLine">{{ node.con }}
                </codehigh-light>
                <div v-else-if="node.type === 'example'">
                    <h3 class="code-show-title">代码显示结果：</h3>
                    <div class="code-exam-show">
                        <example1 v-if="node.con === 'example1'"></example1>
                        <example2 v-if="node.con === 'example2'"></example2>
                    </div>
                </div>
                <h2 v-else-if="node.type === 'h1'">{{ node.con }}</h2>
            </div>
        </div>
        <!-- footer -->
        <article-footer :article="article"></article-footer>
    </div>
</template>

<script>
import CodehighLight from "@/components/CodeHighLight";
import ArticleHeader from "@/components/article/Header";
import ArticleFooter from "@/components/article/Footer";
import Example1 from "./Example1";
import Example2 from "./Example2";
import article from "@/assets/article/filter";

export default {
    name: "VueInstance",
    components: {
        'codehigh-light': CodehighLight,
        'example1': Example1,
        'example2': Example2,
        'article-header': ArticleHeader,
        'article-footer': ArticleFooter,
    },
    data: function () {
        return {
            article
        }
    },
    mounted() {
    }
};
</script>

<style lang="less" scoped>
@import "../../styles/article.less";

#filter {
    background-color: #fff;
    text-align: left;
}
</style>