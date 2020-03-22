export default {
    title: "Vue 实例详解",
    subTitle: "本 Demo 通过用 Vue 函数创建一个新的 Vue 实例。",
    author: {
        name: "素燕",
        link: "https://github.com/lefex/FE"
    },
    footer: [{
            title: '一个页面 Vue 实例只能有一个吗？',
            link: 'https://mp.weixin.qq.com/s/_du0IZ5VZXg9ug1SEWNUFg'
        },
        {
            title: 'Vue.js 官网关于 Vue 实例的描述',
            link: 'https://cn.vuejs.org/v2/guide/instance.html'
        },
        {
            title: 'Vue.js 官网 API',
            link: 'https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE'
        }
    ],
    nodes: [{
            type: 'text',
            con: `本节内容主要学习如何创建一个 Vue 实例，下面所有的例子，都省略了共用的头部代码，如果想跑通例子
            需要把共用的代码一起引入，共同使用。可以通过 script 标签直接加载 Vue.js 文件。`
        },
        {
            type: 'code',
            lang: 'html',
            con: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>实例ue</title>
    // 加载 js 文件
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    // 这里写入各个例子的内容
</body>

</html>`
        },
        {
            type: 'h1',
            con: '例1：创建第一个 Vue 实例'
        },
        {
            type: 'text',
            con: `Vue 其本质是一个函数，一个构造函数，可以被看作是一个“类”，通过 new 创建它的实例。本例创建了一个 Vue 实例。
            其中 el 属性可以是选择器，也可以是一个 HTMLElement 元素，本例中它的值是 id 选择器。data 属性是一个函数，返回值
            是一个对象，对象中的属性可以与 Vue 模板进行绑定，比如 msg 与模板中的 {{ msg }} 绑定，创建 Vue 实例的时候选择的
            模板是 id 为 #example-app-1 的 DOM 和它的子节点。`
        },
        {
            type: 'code',
            lang: 'html',
            con: `<body>
    <div id="example-app-1">欢迎来到 {{ msg }}</div>
    <script>
        const obj = {
            el: '#example-app-1',
            data: function () {
                return {
                    msg: '前端小课'
                }
            }
        }
        const vm = new Vue(obj);
    </script>
</body>`
        },
        {
            type: 'example',
            con: 'example1'
        },
        {
            type: 'h1',
            con: '例2：一个页面中创建多个 Vue 实例'
        },
        {
            type: 'text',
            con: '一个 HTML 中可以创建多个 Vue 实例，下面的例子中创建了两个 Vue 实例。'
        },
        {
            type: 'code',
            lang: 'html',
            con: `<body>
    // 模板
    <div id="app">
        <h1>{{ msg }}</h1>
    </div>
    <div id="app-body">
        <h4>{{ title }}</h4>
    </div>
    // 脚本
    <script>
        const vm = new Vue({
            el: '#app',
            data: function () {
                return {
                    msg: "欢迎来到前端小课",
                }
            }
        });
    </script>
    <script>
        const vmBody = new Vue({
            el: '#app-body',
            data: function () {
                return {
                    title: "Vue 实例讲解"
                }
            }
        });
    </script>
</body>`
        },
        {
            type: 'example',
            con: 'example2'
        },
    ]
};