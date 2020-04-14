export default {
    title: 'Vue 条件渲染',
    subTitle: '条件渲染（Conditional Rendering）是Vue的基础功能之一。v-if 和 v-show 指令都可以用于条件性地渲染一块内容。当某一块内容使用了 v-if 或者 v-show，那么该块内容只会在指令的表达式返回 truthy 值的时候被渲染出来。',
    author: {
        name: 'ShannonMYang',
        link: 'https://github.com/ShannonMYang'
    },
    footer: [{
        title: 'Vue.js 官网对于单文件组件的描述',
        link: 'https://cn.vuejs.org/v2/guide/single-file-components.html'
    }, {
        title: 'Prismjs官方文档',
        link: 'https://prismjs.com/'
    }, {
        title: 'Vue.js 官网API',
        link: 'https://cn.vuejs.org/v2/api/#%E5%86%85%E7%BD%AE%E7%9A%84%E7%BB%84%E4%BB%B6'
    }],
    nodes: [{
        type: 'h1',
        con: `v-if`
    }, {
        type: 'code',
        lang: 'html',
        con: `
        <div id="app">
        <h4 v-if="ifOrNo">v-if 所控制的 HTML 元素</h4>
        <div class="btn" @click="changeIf">v-if 变变变</div>
    </div>`
    }, {
        type: 'code',
        lang: 'javascript',
        con: `<script>
        const obj = {
            el: '#app',
            data: function () {
                return {
                    ifOrNo: true
                }
            },
            methods: {
                changeIf: function () {
                    this.ifOrNo = !this.ifOrNo;
                }
            }
        }
        const vm = new Vue(obj);
    </script>`
    }, {
        type: 'code',
        lang: 'css',
        con: `<style>
        #app {
            padding: 15px 15px;
        }
        .btn {
            width: 123px;
            height: 39px;
            background-color: rgb(26, 192, 204);
            border-radius: 5px;
            color: #fff;
            font-weight: 700;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
        }
    </style>`
    }, {
        type: 'text',
        con: `在浏览器中点击 F12 查看Elements，会看到如下截图。`
    }, {
        type: 'img',
        con: 'https://upload-images.jianshu.io/upload_images/356233-65c1f6688ee03264.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
        width: '100%'
    }, {
        type: 'text',
        con: `在页面上点击 v-if 变变变，继续查看Elements，会看到如下截图。`
    }, {
        type: 'img',
        con: 'https://upload-images.jianshu.io/upload_images/356233-630f56d0298a48f6.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
        width: '100%'
    }, {
        type: 'text',
        con: `细致的你，一定发现了一些东西。没错，这就是 v-if 的真正所做的事情，注销了 用了 v-if 的内容块。`
    }, {
        type: 'h1',
        con: `v-show`
    }, {
        type: 'code',
        lang: 'html',
        con: `
        <div id="app">
        <h4 v-show="showOrNo">v-show 所控制的 HTML 元素</h4>
        <div class="btn" @click="changeShow">v-show 变变变</div>
    </div>`
    }, {
        type: 'code',
        lang: 'javascript',
        con: `<script>
        const obj = {
            el: '#app',
            data: function () {
                return {
                    showOrNo: true
                }
            },
            methods: {
                changeShow: function () {
                    this.showOrNo = !this.showOrNo;
                }
            }
        }
        const vm = new Vue(obj);
    </script>`
    }, {
        type: 'code',
        lang: 'css',
        con: `<style>
        #app {
            padding: 15px 15px;
        }
        .btn {
            width: 123px;
            height: 39px;
            background-color: rgb(26, 192, 204);
            border-radius: 5px;
            color: #fff;
            font-weight: 700;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
        }
    </style>`
    }, {
        type: 'text',
        con: `在浏览器中点击 F12 查看Elements，会看到如下截图。`
    }, {
        type: 'img',
        con: 'https://upload-images.jianshu.io/upload_images/356233-f3795e39e19fe6ac.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
        width: '100%'
    }, {
        type: 'text',
        con: `在页面上点击 v-show 变变变，继续查看Elements，会看到如下截图。`
    }, {
        type: 'img',
        con: 'https://upload-images.jianshu.io/upload_images/356233-4b7238439858f8e2.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp',
        width: '100%'
    }, {
        type: 'text',
        con: `细致的你，一定发现了一些东西。没错，这就是 v-show 的真正所做的事情，加入了样式 display:none。`
    }, {
        type: 'h1',
        con: `总结：`
    }, {
        type: 'h4',
        con: `1. 各自特点： `
    }, {
        type: 'text',
        con: `v-if：每次都会删除或创建元素；有较高的切换性能消耗。`
    }, {
        type: 'text',
        con: `v-show：每次只是切换了元素的 display: none 样式；有较高的初始渲染消耗。`
    }, {
        type: 'h4',
        con: `2. 使用建议：`
    }, {
        type: 'text',
        con: `如果元素涉及到频繁的切换操作，最好不要使用 v-if； `
    }, {
        type: 'text',
        con: `如果元素可能永远不会被显示出来，则推荐使用 v-if。 `
    }, ]
}