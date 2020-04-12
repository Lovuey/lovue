<template>
    <div id="vueComponent">
        <!-- header -->
        <article-header :article="article"></article-header>
        <!-- body -->
        <div class="post-body">
            <div v-for="(node, index) in article.nodes" :key="index">
                <!-- 文本节点解析 -->
                <p v-if="node.type === 'text'" class="text">{{ node.con }}</p>
                <!-- 图片 -->
                <div v-else-if="node.type === 'img'" class="image-box">
                    <img class="image" :src="node.con" :height="node.height" :width="node.width">
                </div>
                <!-- 代码组件 -->
                <codehigh-light v-else-if="node.type === 'code'" :code='node.con' :lang='node.lang'
                    :dataLine="node.stressLine">{{ node.con }}
                </codehigh-light>
                <!-- 引用 -->
                <p v-if="node.type === 'quote'" class="quote">{{ node.con }}</p>
                <!-- 所以的实例需要对应一个具体的组件，用来实现例子 -->
                <div v-else-if="node.type === 'example'">
                    <h3 class="code-show-title">代码显示结果：</h3>
                    <div class="code-exam-show">
                        <!-- example1 加载组件 Example1 -->
                        <example1 v-if="node.con === 'example1'"></example1>
                        <example2 v-if="node.con === 'example2'" :code='node.code' data-line='1,7,9' lang='javascript'></example2>
                    </div>
                    <a :href="node.source" target="_blank" rel="noopener noreferrer">
                        <div class="code-download">下载本例完整代码</div>
                    </a>
                </div>
                <!-- 标题组件 -->
                <h2 v-else-if="node.type === 'h1'">{{ node.con }}</h2>
            </div>
        </div>
        <!-- footer -->
        <article-footer :article="article"></article-footer>
    </div>
</template>

<script>
// 代码组件
import CodehighLight from "@/components/CodeHighLight";
// 文章头部组件
import ArticleHeader from "@/components/article/Header";
// 文章底部组件
import ArticleFooter from "@/components/article/Footer";
// 例1
import Example1 from "./Example1";
// 例2
import Example2 from "./Example2";
// 文章数据
import article from "@/assets/article/vueComponent";

export default {
    name: "VueComponent",
    components: {
        CodehighLight,
        Example1,
        Example2,
        ArticleHeader,
        ArticleFooter
    },
    data() {
        return {
            article
        };
    }
};
</script>

<style lang="less" scoped>
@import "../../styles/article.less";

#vueComponent {
    background-color: #fff;
    text-align: left;
}
</style>