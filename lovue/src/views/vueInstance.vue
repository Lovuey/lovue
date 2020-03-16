<template>
    <div id="vueInstance">
        <div class="post-header">
            <p class="post-title">{{ post.title }}</p>
            <p class="post-des">{{ post.des }}</p>
            <p class="author">作者：<a :href="post.link" target="_blank">{{ post.author }}</a></p>
        </div>
        <div class="post-body">
            <p>在学习 Vue 之前，也许你已经看到过 <code>new Vue({})</code> 这样的代码，我们今天一起学习 Vue 实例。</p>
            <p>在开始之前我们先看一段代码：</p>
            <code>
                const vm = new Vue({

                });
            </code>
        </div>
        <div class="post-footer">
            <p class="post-link">参考：</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VueInstance',
        components: {

        },
        data: function () {
            return {
                post: {
                    title: 'Vue 实例详解',
                    author: '素燕',
                    des: '本 Demo 通过用 Vue 函数创建一个新的 Vue 实例。',
                    link: 'https://github.com/lefex/FE'

                }
            }
        },
        mounted() {
            console.log(this.$route);
        }
    }
</script>

<style>
    #vueInstance {
        background-color: #fff;
        text-align: left;
    }

    .post-header {
        border-left: 4px solid #D0021B;
        border-right: 4px solid #D0021B;
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

    code {
        font-size: 15px;
        border-left: 1px solid #7089FF;
        border-radius: 3px;
        background-color:#eef;
        padding: 2px 5px;
    }
</style>