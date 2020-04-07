# lovue

## 如何跑起来：

```
git clone git@github.com:Lovuey/lovue.git
cd lovue
npm install
npm run serve
```
## 提交说明

master 分支是当前最新的稳定版本，提交代码不能提交到 master 分支；
dev 分支为开发分支，可以在这个分支提交代码；

## 代码规范

- 文件名首字母小写；

## 目录说明

```
├── README.md
├── babel.config.js
├── node_modules
│   ├── @babel
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html `入口页面`
│   └── themes
├── src `源代码，在这里写你的 demo`
│   ├── App.vue  `vue实例入口组件`
│   ├── assets `资源文件`
│   ├── components `通用组件（项目级别的）`
│   ├── const `一下常量的定义，配置文件`
│   ├── main.js `入口文件，也是 Vue 实例创建的地方`
│   ├── router `路由，lovue 项目采用的是 vue-router，组件之间切换需要使用 vue-router`
│   ├── styles `样式定义`
│   ├── utils `项目中通用的工具类`
│   └── views `页面，每一个 demo 需要对应一个`
└── vue.config.js
```

### scr 目录详细说明

```

├── App.vue
├── assets
│   ├── article `每一个demo对应一篇文章`
│   │   └── vueInstance.js
│   ├── icon `图标`
│   │   ├── about.png
│   │   ├── github.png
│   └── logo.png
├── components
│   ├── Bottom.vue `footer 组件`
│   ├── CodeHighLight `代码高亮组件`
│   │   └── index.vue
│   ├── Content.vue `中间内容区域组件`
│   ├── Top.vue `顶部导航组件`
│   └── article `文章相关的组件`
│       ├── Footer.vue `文章底部引用部分`
│       └── Header.vue `文章头部`
├── const
│   └── content.js `这个是首页每个 demo 的数据源，认领 demo 的同学修改这个`
├── main.js
├── router `路由`
│   └── index.js
├── styles `样式`
│   ├── article.less `文章相关的样式`
│   ├── base.less `样式基类，统一主题`
│   └── lovue.less `主要的样式`
├── utils
│   └── test.js
└── views
    ├── Home.vue
    └── vueInstance `vue实例 demo`
        ├── Example1.vue `每个 demo 中的例子，例子 1`
        ├── Example2.vue `每个 demo 中的例子，例子 2`
        └── VueInstance.vue `Vue 实例入口`

```
## 如何开启第一个 demo

**第1步：**认领 demo

未认领的 demo，会标有“未认领”的字样，如果你有想认领的 demo，直接修改 `/lovue/src/const/content.js`文件，把你想认领的 demo 修改为自己，要保证信息全面（头像、昵称、标题、描述）。以 PR 的形式提交到 **dev 分支**；比如：

```js
{
	title: "Vue 实例",
	des: "通过用 Vue 函数创建一个新的 Vue 实例。",
	route: "/vueinstance",
	author: {
	    nickname: "素燕",
	    avatar: "https://tvax3.sinaimg.cn/crop.0.0.667.667.180/006uSOiEly8fxzfw4tub0j30ij0ijt92.jpg",
	    link: "https://github.com/lefex"
}
```

**第2步**：创建文件，添加入口

每个 demo 会在 `/lovue/src/views`下对应一个文件夹，你所写 demo 的源代码都将保存在这个目录下。比如 vue 实例 demo。

 ```
└── vueInstance `vue实例 demo`
    ├── Example1.vue `每个 demo 中的例子，例子 1`
    ├── Example2.vue `每个 demo 中的例子，例子 2`
    └── VueInstance.vue `Vue 实例入口`
 ```

文章模板除了 `article-header` 和 `article-footer` 保持一致外，其它的可自行修改，满足自己不同的需求，更好地实践。`post-body`内容部分可自行修改，也可以不动。



```html
<template>
    <div id="vueInstance">
        <!-- header -->
        <article-header :article="article"></article-header>
        <!-- body -->
        <div class="post-body">
            <div v-for="(node, index) in article.nodes" :key="index">
                <p v-if="node.type === 'text'" class="text">{{ node.con }}</p>
                <codehigh-light v-else-if="node.type === 'code'"
                    :code='node.con'
                    :lang='node.lang'
                    :dataLine = "node.stressLine">{{ node.con }}
                </codehigh-light>
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
        <!-- footer -->
        <article-footer :article="article"></article-footer>
    </div>
</template>
```



**第3步**：创建文章

每个 demo 其实是文章与实例的结合体，所有的文章需要在 ``/lovue/src/assets/article`目录下创建，名字与 demo 组件的保持一致。比如 vueInstance.js。每篇文章使用统一的数据结构：

```js
export default {
    title: "Vue 实例详解",
    subTitle: "本 Demo 通过用 Vue 函数创建一个新的 Vue 实例。",
    // 作者信息
    author: {
        name: "素燕",
        link: "https://github.com/lefex/FE"
    },
    // footer
    footer: [{
            title: '一个页面 Vue 实例只能有一个吗？',
            link: 'https://mp.weixin.qq.com/s/_du0IZ5VZXg9ug1SEWNUFg'},
    ],
    // 内容节点
    nodes: [{
            type: 'text',
            con: `本节内`
        },
        {
            type: 'code',
            lang: 'html',
            stressLine: '9',
            con: `<!DOCTYPE html><html lang="en"></html>`
        },
        {
            type: 'h1',
            con: '例1：创建第一个 Vue 实例'
        },
        {
            type: 'example',
            con: 'example2',
            // demo 在 public 文件下完整的 demo
            source: '/article/vueInstance/example3.html'
        },
        {
            type: 'img',
            con: 'https://cn.vuejs.org/images/lifecycle.png',
            width: "600px"
        },
    ]
};
```
所有的 demo 需要 `public/article` 创建一个对应 demo 的文件夹，比如 vueInstance。这个文件下每个 demo 可以在浏览器正常
访问。


现在支持的内容节点类型有，如果有需求可自行扩展：

- text：普通文字；
- code：代码；
- h1：标题；
- example：代码示例；
- img: 图片

**第4步**：添加路由

所以的文件准备就绪后，需要在你所认领的 demo 的位置  `/lovue/src/const/content.js` 添加 route 参数。比如：

```js
{
	title: "Vue 实例",
	des: "通过用 Vue 函数创建一个新的 Vue 实例。",
	route: "/vueinstance",
	author: {
	    nickname: "素燕",
	    avatar: "https://tvax3.sinaimg.cn/crop.0.0.667.667.180/006uSOiEly8fxzfw4tub0j30ij0ijt92.jpg",
	    link: "https://github.com/lefex"
}
```

在  `/lovue/src/router/index.js`中添加路由：

```js
const routes = [
    // Vue 实例 demo
    {
        path: '/vueinstance',
        name: 'VueInstance',
        component: VueInstance
    }
];
```


到此所有的准备工作完毕，在首页点击卡片，观察是否能正常跳转。如果能正常跳转，说明配置成功。



**代码命名规范需要遵循现在已有代码规范**

**代码命名规范需要遵循现在已有代码规范**

**代码命名规范需要遵循现在已有代码规范**

**代码要写注释**

## 贡献者

@素燕：Vue实例 ，4月 7 号完成；
@ygben 模板语法、插槽，4月 12 号完成；
@张家博 计算属性和监听器 4月11日完成
@Wynne Class 与 Style 绑定 4月11号完成
@ShannonMYange if 条件渲染 4月12日完成
@沈鑫 for列表渲染 4月12日完成
@chuhuangvio 表达输入绑定, 4月12日完成
@张晓檬 Prop，4月12号完成
@Yuxiaoy1 单文件组件，4月12号完成
@effort 自定义事件  4月12号完成



## 上线

```
npm run build
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

