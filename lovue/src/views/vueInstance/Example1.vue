<!-- 模板 -->
<template>
    <div class="example-app-1">
        <div class="text">{{ msg }};</div>
    </div>
</template>

<script>
    export default {
        name: 'example1',
        // 数据，用来与模板进行绑定，返回值是一个函数。
        data: function () {
            return {
                lists: [
                    '你好，我是素燕',
                    '一名大前端工程师，主要方向前端和 iOS',
                    '2019年8月30日我开始写《前端小课》',
                    '一本帮助你入门前端的电子书',
                    '最终目的帮助10万人入门并进阶前端',
                    '2020年3月6日我创建『Vue虚拟实验室』',
                    '与 40 位小伙伴共同学习 Vue',
                    '2020年3月7日创建开了我们第一个项目 Lovue（Love vue）',
                    '一个实例与知识讲解的项目',
                    '从基础到核心原理',
                    '一点一滴',
                    '最终搞透 Vue',
                    '大家加油！！！'
                ],
                curIndex: 0
            };
        },
        // 生命周期函数
        mounted() {
            this.startRun();
        },
        // 计算属性
        computed: {
            msg: function() {
                return this.lists[this.curIndex];
            }
        },
        // 方法定义
        methods: {
            startRun() {
                setInterval(() => {
                    this.curIndex += 1;
                    if (this.curIndex >= this.lists.length) {
                        this.curIndex = 0;
                    }
                }, 3000);
            }
        }
    }
</script>

<style lang="less" scoped>
.example-app-1 {
    padding: 20px;
    .text {
        font-size: 20px;
        font-weight: 700;
    }
}
</style>