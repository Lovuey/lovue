export default {
    title: "Vue 实例详解",
    subTitle: `欢迎来到「Vue虚拟实验室」，这是你学习 Vue 的第一节课，这节课介绍了如何使用 Vue 创建一个页面，实现数据与模板动态
    绑定，体验一下什么是响应式（Reactivity）。Vue 的世界太美妙了。`,
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
    nodes: [
        {
            type: 'text',
            con: `开启 Vue 世界的大门是从创建第一个 Vue 实例开始。Vue 本质上是一个“对象”，一个构造函数，通过 new 来创建一个 Vue 实例。
            在创建 Vue 实例之前，需要通过 script 标签直接加载 Vue.js 文件（下面代码中第 9 行代码），为了简单演示效果，我们后面介绍的所
            有 demo 都将使用 CDN 上的 vue.js。`
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
    <title>Vue实例</title>
    <!-- // 加载 js 文件 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <!-- 这里写入各个例子的内容 -->
</body>

</html>`
        },
        {
            type: 'text',
            con: `通过 script 标签加载完  Vue.js 以后，在当前页面的运行环境中便可以使用 Vue 这个对象。通过 VSCode 创建一个 HTML 文件，
            复制上面的代码所到创建的 HTML 文件中，在浏览器打开。右击 -> inspect -> 选择 Console -> 输入 Vue -> 按回车，你会发现 Vue 的
            本质就是一个函数，并带有一个参数 options。这个 参数包含了很多内容，比如 data、filters、computed、生命周期函数等等。`
        },
        {
            type: 'code',
            lang: 'js',
            con: ` Vue (options) {
if (!(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the new keyword');
}
    this._init(options);
}`
        },
        {
            type: 'text',
            con: `创建 Vue 实例的时候，需要有一个 option 参数，这个参数中定义了比较多的属性，比如数据相关的 data、props、
            propsData、computed、methods、watch；DOM 相关的 el、template、render、renderError；声明周期钩子相关的：beforeCreate、
            created、beforeMount、mounted、beforeUpdate、updated、activated、deactivated、beforeDestroy、destroyed；
            资源方面的： directives、filters、components；组合相关的： parent、minxins、extends、provide / inject；还有一些
            其它属性 name、delimiters、functional、model、inheritAttrs、comments。`
        },
        {
            type: 'h1',
            con: '例1：让文字动起来'
        },
        {
            type: 'text',
            con: `本例实现一个文字滚动的效果。其中 el 属性可以是选择器，也可以是一个 HTMLElement 元素，本例中它的值是 id 选择器。
            data 属性是一个函数，返回值是一个对象，对象中的属性可以与 Vue 模板进行绑定。例子中定义了两个数据属性 lists 和 curIndex，
            msg 是一个计算属性，定义在 computed 属性中，这样当 curIndex 发生变化时，msg 也会及时更新。由于 msg 与模板进行了绑定，
            这样当 curIndex 发生变化时，页面也会及时刷新。创建 Vue 实例的时候需要提供一个模板，例子中的模板是 id 为 #example-app-1
            的 DOM 和它的子节点。`
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '3',
            con: `<!-- 模板 -->
<div class="example-app-1">
    <div class="text">{{ msg }};</div>
</div>`
        },
        {
            type: 'code',
            lang: 'js',
            stressLine: '48',
            con: `// JS代码
<script>
    let option = {
        el: '#example-app-1',
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
    };
    new Vue(option)
</script>`
        },
        {
            type: 'code',
            lang: 'css',
            con: `<!-- 样式 -->
<style>
    #example-app-1 {
        padding: 20px;
    }
    .text {
        font-size: 20px;
        font-weight: 700;
    }
</style>`
        },
        {
            type: 'example',
            con: 'example1',
            source: '/lovue/article/vueInstance/example1.html'
        },
        {
            type: 'h1',
            con: '例2：一个页面中创建多个 Vue 实例（实际项目中很少这样用）'
        },
        {
            type: 'text',
            con: '一个 HTML 中可以创建多个 Vue 实例，下面的例子中创建了两个 Vue 实例。'
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '3,6',
            con: `// 模板
<div id="app">
    <h1>{{ msg }}</h1>
</div>
<div id="app-body">
    <h4>{{ title }}</h4>
</div>`},
        {
            type: 'code',
            lang: 'html',
            stressLine: '3',
            con: `// 脚本：第一个实例
<script>
    const vm = new Vue({
        el: '#app',
        data: function () {
            return {
                msg: "欢迎来到 Vue 虚拟实验室，我是第一个实例",
            }
        }
    });
</script>`
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '3',
            con: `// 脚本：第二个实例
<script>
    const vmBody = new Vue({
        el: '#app-body',
        data: function () {
            return {
                title: "我是第二个实例"
            }
        }
    });
</script>`
        },
        {
            type: 'example',
            con: 'example2',
            source: '/lovue/article/vueInstance/example2.html'
        },
        {
            type: 'h1',
            con: '例3：Vue 实例的生命周期'
        },
        {
            type: 'text',
            con: '生命周期钩子，也就是当创建 Vue 实例的时候，会发出一些事件给使用者，这样可以根据不同的事件来处理不同的事情。图来自 Vue.js 官网。'
        },
        {
            type: 'img',
            con: 'https://cn.vuejs.org/images/lifecycle.png',
            width: "600px"
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '3,5',
            con: `// 模板
<div id="app">
    <h3>{{ msg }}</h3>
    <h4>下面是 Vue 实例的声明周期函数</h4>
    <p v-for="(item, index) in lists">调用了 {{ index + 1 }}: - {{ item }}</p>
</div>`},
        {
            type: 'code',
            lang: 'html',
            stressLine: '3',
            con: `// 模板
<script>
    const vm = new Vue({
        el: '#app',
        data: function () {
            return {
                lists: []
            }
        },
        beforeCreated: function () {
            this.lists.push('beforeCreated');
            console.log('life beforeCreated');
        },
        created: function () {
            this.lists.push('created');
            console.log('life created');
        },
        beforeMount: function () {
            this.lists.push('beforeMount');
            console.log('life beforeMount');
        },
        mounted: function () {
            this.lists.push('mounted');
            console.log('life mounted');
        },
        beforeUpdate: function () {
            console.log('life beforeUpdate');
        },
        updated: function () {
            console.log('life updated');
        },
        beforeDestory: function () {
            console.log('life beforeDestory');
        },
        destroyed: function () {
            console.log('life destroyed');
        }
    });
</script>`
        },
        {
            type: 'example',
            con: 'example3',
            source: '/lovue/article/vueInstance/example3.html'
        },
        {
            type: 'h1',
            con: '写在最后'
        },
        {
            type: 'text',
            con: '本节内容通过几个例子说明 Vue 的创建过程。'
        },
    ]
};