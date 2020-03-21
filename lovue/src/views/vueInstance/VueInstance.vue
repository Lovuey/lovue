<template>
    <div id="vueInstance">
        <div class="post-header">
            <p class="post-title">{{ article.title }}</p>
            <p class="post-des">{{ article.subTitle }}</p>
            <p class="author">作者：<a :href="article.author.link" target="_blank">{{ article.author.name }}</a></p>
        </div>
        <div class="post-body">
            <div v-for="(node, index) in article.nodes" :key="index">
                <p v-if="node.type === 'text'" class="text">{{ node.con }}</p>
                <codehigh-light v-else-if="node.type === 'code'" :code='node.con' :lang="node.lang">{{ node.con }}</codehigh-light>
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
        <div class="post-footer">
            <p class="post-link">参考：</p>
            <div v-for="(item, index) in article.footer" :key="index">
                <a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import CodehighLight from "@/components/CodeHighLight";
import Example1 from "./Example1";
import Example2 from "./Example2";
import article from "@/assets/article/vueInstance.js";

export default {
    name: "VueInstance",
    components: {
        'codehigh-light': CodehighLight,
        'example1': Example1,
        'example2': Example2,
    },
    data: function () {
        return {
            article
        }
    },
    mounted() {
        console.log(this.$route);
    }
};
</script>

<style>
    #vueInstance {
        background-color: #fff;
        text-align: left;
    }

    .post-header {
        border-left: 4px solid #d0021b;
        border-right: 4px solid #d0021b;
        background-color: white;
        padding: 5px 20px;
        border-radius: 4px;
    }

    .post-title {
        font-weight: 700;
        font-size: 30px;
        color: #555;
        text-align: left;
    }

    .post-body {
        padding: 20px;
        border-top: 10px solid #f6f8f9;
        min-height: 500px;
    }

    .post-footer {
        border-top: 10px solid #f6f8f9;
        border-left: 4px solid #eee;
        background-color: white;
        padding: 0 20px 20px 20px;
        border-radius: 4px;
        min-height: 100px;
    }

    .post-link {
        font-size: 20px;
    }
    .text {
        font-size: 18px;
    }
    h2 {
        border-left: 4px solid #d0021b;
        background-color: white;
        padding: 5px 20px;
    }
    .code-exam-show {
        padding: 10px 10px;
        padding-bottom: 20px;
        border: #E02020 1px;
        border-style: dotted;
    }
    .code-show-title {
        color: blue;
    }
</style>