export default {
    title: "Vue 实例详解",
    subTitle: "本 Demo 通过用 Vue 函数创建一个新的 Vue 实例。",
    author: {
        name: "素燕",
        link: "https://github.com/lefex/FE"
    },
    nodes: [{
            type: 'h1',
            con: '例1：创建一个 Vue 实例'
        },
        {
            type: 'text',
            con: `Vue 其本质是一个函数，一个构造函数，可以被看作是一个“类”，通过 new 创建它的实例。本例子创建第一个 Vue 实例。
            `
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
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div>{{ title }}</div>
    <div id="app">Hello {{ msg }}</div>
    <script>
        const obj = {
            el: '#app',
            data: function () {
                return {
                    msg: '前端小课',
                    title: '早上好，打卡！'
                }
            }
        }
        const vm = new Vue(obj);
    </script>
</body>

</html>`
        },
    ]
};