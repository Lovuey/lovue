export default {
    title: "组件基础",
    subTitle: "过滤器是在项目中使用非常频繁的特性，可以把一条数据转换成你想要的格式。",
    author: {
        name: "素燕",
        link: "https://github.com/lefex/FE"
    },
    footer: [{
            title: '官方文档',
            link: 'https://cn.vuejs.org/v2/guide/filters.html'
        }
    ],
    nodes: [{
            type: 'text',
            con: `如果你刚学习 Vue，可能会被计算属性、过滤器和 data 这三种表达式搞混。它们三个都可以做与数据相关的操作。使用计算属性
            的前提条件是它必须依赖 data 中已经定义属性；过滤器，我觉得它是一种能够让模板中的数据换一种显示方式，比如显示价格的地方添加
            一个 ￥ 符号，并可以对参数做转换（把分转换成元）；data 这个其实很好理解，就是在创建 Vue 实例的时候，定义与模板要绑定的属性，
            这样 Vue 实例会与 data 中的属性进行关联，以达到响应式的效果。下面举几个关于 filter 的例子，帮你解惑。`
        },
        {
            type: 'text',
            con: `在 demo 开始之前，我们先引入 vue.js 这个文件，第 9 行代码高亮部分。`
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '9',
            con: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>过滤器 filter</title>
    // 加载 js 文件
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    // 这里写模板和 Vue 实例的创建的代码
</body>

</html>`
        },
        {
            type: 'h1',
            con: '例1：价格显示'
        },
        {
            type: 'text',
            con: `过滤器 filter 是 Vue 实例的一个属性，它可以被 v-bind 和 {{ }} 使用，过滤器之间通过 “|” 分割。本例的主要内容：
            server 下发了一个商品列表，列表中是每个商品，商品包含名字和价格属性，价格 price 单位是分。现在要把价格进行转换，在界面
            上显示成 ￥xxx元，比如 price = 998，则界面显示为 “￥9.98元”。`
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '5',
            con: `// 模板代码
<template>
    <div>
        <div v-for="(item, index) in lists" :key="index">
            <p>{{ item.name }}：{{ item | priceShow }}</p>
        </div>
    </div>
</template>`
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '14-18',
            con: `// JavaScript 代码部分
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
</script>`
        },
        {
            type: 'example',
            con: 'example1'
        },
        {
            type: 'h1',
            con: '例2：多个过滤器'
        },
        {
            type: 'text',
            con: `一个 v-bind 或 {{ }} 中可以通过多个选择器进行转换，比如上面的【例1】，我们拆分成两个选择器，一个用来把分
            转换成元，一个把转换结果显示成 ￥xxx元，比如 price = 998，则界面显示为 “￥9.98元”`
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '5',
            con: `// 模板代码
<template>
    <div>
        <div v-for="(item, index) in lists" :key="index">
            <p>{{ item.name }}：{{ item | yuan | show }}</p>
        </div>
    </div>
</template>`
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '14-18',
            con: `// JavaScript 代码部分
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
            yuan(item) {
                return item.price / 100;
            },
            show(price) {
                return '￥' + price + '元';
            }
        }
    }
</script>`
        },
        {
            type: 'example',
            con: 'example2'
        },
        {
            type: 'h1',
            con: '写在最后'
        },
        {
            type: 'text',
            con: `总之，我觉得 filter 特别适合 data 中的数组、map 这样的数据结构，当使用 v-for 遍历数组的时候，可以方便地对
            每一个 item 进行做转换处理。`
        },
    ]
};