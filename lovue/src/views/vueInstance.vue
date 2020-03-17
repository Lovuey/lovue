<template>
    <div id="vueInstance">
        <div class="post-header">
            <p class="post-title">{{ article.title }}</p>
            <p class="post-des">{{ article.subTitle }}</p>
            <p class="author">作者：<a :href="article.author.link" target="_blank">{{ article.author.name }}</a></p>
        </div>
        <div class="post-body">
            <div v-for="(node, index) in article.nodes" :key="index">
                <p v-if="node.type === 'text'">{{ node.con }}</p>
                <codehighLight v-else-if="node.type === 'code'" :code='node.con' :lang="node.lang">{{ node.con }}</codehighLight>
            </div>
        </div>
        <div class="post-footer">
            <p class="post-link">参考：</p>
        </div>
    </div>
</template>

<script>
import codehighLight from "@/components/CodeHighLight";
import article from "../assets/article/vueInstance.js";
export default {
    name: "VueInstance",
    components: {
        codehighLight
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
        padding: 5px 20px;
        border-radius: 4px;
        min-height: 100px;
    }

    .post-link {
        font-size: 20px;
    }

    /* code {
  font-size: 15px;
  border-left: 1px solid #7089ff;
  border-radius: 3px;
  background-color: #eef;
  padding: 2px 5px;
} */
</style>