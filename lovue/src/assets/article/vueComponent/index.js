export default {
    title: 'Vue 单文件组件应用',
    subTitle: `组件（Component）是Vue最强大的功能之一。组件可以扩展 html 元素，封装可重用的代码。在较高层面上，组件是自定义标签，所有的 Vue 组件同时也都是 Vue 的实例。
    本节课为大家介绍如何在Vue中定义一个单文件组件，以及通过一个实际的案例（lovue代码高亮组件）讲解Vue中组件的使用。`,
    author: {
        name: 'Yuxiaoy1',
        link: 'https://github.com/Yuxiaoy1'
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
        type: 'text',
        con: `Vue 为我们提供了很方便的创建组件的方式，组件化开发能够将业务进行解耦，进而提高项目的开发效率。在 Vue 中定义组件非常简单:`
    }, {
        type: 'code',
        lang: 'html',
        stressLine: '3,7',
        con: `
        <div id="app">
    <!-- 2. 标签形式引入lovue组件 -->
    <lovue></lovue>
</div>
<script>
    // 1. 使用Vue.component(name,{})进行组件全局注册
    Vue.component('lovue', {
        template: '<h2>这是lovue组件</h2>'
    })
    const vm = new Vue({
        el: '#app',
        data: {},
        methods: {}
    })
</script>`
    }, {
        type: 'text',
        con: `以上代码便定义了一个全局的 lovue 组件，随后我们可以很愉快地在页面各个位置通过引入 lovue 标签的形式使用我们的组件了。
        对于 demo 型项目，采用这种方式是可以的，但这种形式缺点很明显，比如字符串模板无法代码高亮，无法单独定义 CSS 样式等。因此在实际的项目当中，我们更多的是采用单文件组件的形式来定义组件。`
    }, {
        type: 'h1',
        con: '单文件组件'
    }, {
        type: 'text',
        con: `在 Vue 中，一个.vue 文件就是一个单文件组件，一个基本的单文件组件代码结构如下：`
    }, {
        type: 'code',
        lang: 'html',
        con: `
        <template>
    <div>
        <!-- 组件html代码 -->
        <h3>这是lovue单文件组件</h3>
    </div>
</template>`
    }, {
        type: 'code',
        lang: 'javascript',
        con: `
        
<script>
export default {
    // JS代码部分，包含组件内定义的属性及方法
    name: "Lovue",
    data() {
        return {};
    }
};
</script>`
    }, {
        type: 'code',
        lang: 'css',
        con: `
<style scoped>
/* CSS代码，添加scoped属性将定义为局部样式 */
</style>`
    }, {
        type: 'text',
        con: `将内嵌的组件定义改造为单文件组件形式后，我们可以在其他页面中，通过 import 语法进行导入，并采取全局或者局部的方式进行注册：`
    }, {
        type: 'code',
        lang: 'javascript',
        stressLine: '1,4,7',
        con: `
        import Lovue from '@/components/Lovue'

// 1.全局注册
Vue.components('lovue', Lovue)

// 2.Vue实例内部局部注册
const vm = new Vue({
  el: '#app',
  components: {
    Lovue
  }
})`
    }, {
        type: 'text',
        con: `使用单文件组件，能让我们的项目文件结构较为清晰，使用 vue-cli创建的项目，脚手架已经帮我们创建好了专门放置组件的文件夹 components 和 views ，components 一般用来放置小型组件，在其他页面可能会被多次引用，views用来放置页面级组件，一般不可复用。`
    }, {
        type: 'example',
        con: 'example1',
        source: '/lovue/article/vueComponent/example1.html'
    }, {
        type: 'h1',
        con: '代码高亮组件实现（基于 Prismjs）'
    }, {
        type: 'text',
        con: `学会使用单文件组件后，我们便可以定制自己的组件了。在 Lovue 项目中，我们便创建了代码高亮组件，其功能是针对指定的代码块进行高亮显示，同时组件还实现了代码块内部的局部代码高亮及代码块的主题切换功能，下面使用迭代的思想介绍该组件的实现过程。`
    }, {
        type: 'text',
        con: `创建组件之前，我们需要清楚组件的使用场景，这样能让我们更好地对组件功能进行划分，并从用户角度去设计一款体验良好的组件。
        具体到 Lovue 的代码高亮组件，我们需要能够对文章作者指定的代码块进行高亮显示，同时对于代码块中的重点代码区域可以进行着重显示，这样对于文章的读者来说，可以很快速的了解到作者想讲解的代码片段。同时，为了适应不同读者对于代码显示风格的喜好，组件还需实现多种预定义主题的切换功能。
        分析完成后，我们就可以开始创建代码高亮组件了。`
    }, {
        type: 'text',
        con: `对于代码高亮功能的实现，目前已有像 Prismjs, highlight.js 等比较成熟，使用程度较高的库了，这里我们选用 Prismjs 来实现我们的代码高亮组件。
        因为选用了第三方库，因此第一步我们需要将 Prismjs 引入到我们的项目当中：`
    }, {
        type: 'code',
        lang: 'bash',
        con: 'npm i prismjs babel-plugin-prismjs -S'
    }, {
        type: 'quote',
        con: 'prismjs 为核心库，babel-plugin-prismjs 可以配置 prismjs 附带的多种插件；若 npm 下载慢，可以使用 cnpm'
    }, {
        type: 'text',
        con: `安装完成后，我们需要更新项的目配置文件 babel.config.js，添加如下配置项：`
    }, {
        type: 'code',
        con: `"plugins": [
            ["prismjs",
                {
                    "languages": ["html", "javascript", "css", "markup"],
                    "css": true
                }
            ]
        ]`
    }, {
        type: 'text',
        con: `以上配置定义了我们需要高亮显示的代码语言，配置好之后，我们就可以开始搭建组件的代码了。`
    }, {
        type: 'code',
        lang: 'html',
        stressLine: '4',
        con: `<template>
    <pre>
        <!-- class中指定代码语言 -->
        <code class="language-javascript">
            const vm = new Vue({
                el: '#app',
                data: {},
                methods: {}
            })
        </code>
    </pre>
</template>`
    }, {
        type: 'code',
        stressLine: '2,7',
        con: `<script>
        import Prism from "prismjs";
        export default {
            name: "CodeHighLight",
            mounted() {
                // Prismjs内置的代码高亮方法
                Prism.highlightAll();
            }
        };
        </script>`
    }, {
        type: 'text',
        con: `上述代码通过仅使用 Prismjs 库自带的方法，已经实现了一个最基本且可用的代码高亮组件了。是的，就是这么简单，你现在可以在你的页面中引入这个组件了，如无意外，你将看到如下效果：`
    }, {
        type: 'img',
        con: 'https://cdn.nlark.com/yuque/0/2020/png/1076531/1585296669286-2ffd5136-a125-4741-ae41-06d01aef35a6.png'
    }, {
        type: 'text',
        con: `但该组件目前过于简单，且代码块写死在组件中，用户无法自定义，因此需要在此基础上进行改进。这是一个很好的做项目/写代码的方式，首先实现最基本的功能，然后在此基础上进行更新迭代，慢慢添加新的功能。`
    }, {
        type: 'text',
        con: `考虑我们前面分析的使用场景，用户在父页面中引入我们的组件时可定义自己的代码块，因此该代码块是在父组件中定义，但是要在子组件中可以使用的。解决这个问题，我们需要使用到 Vue 中常用的父子组件传值方法，群里其他同学分享过具体的使用，这里不再赘述，直接上代码：`
    }, {
        type: 'code',
        lang: 'html',
        stressLine: '4',
        con: `<template>
        <div>
            <pre v-if="code">
                <code :class="codeClass" v-text="code"></code>
            </pre>
        </div>
    </template>`
    }, {
        type: 'code',
        stressLine: '',
        con: `<script>
        import Prism from "prismjs";
        import "prismjs/themes/prism-tomorrow.css";
        export default {
            name: "CodeHighLight",
            props: {
                // 父组件的代码块变量
                code: {
                    type: String,
                    required: true
                },
                // 代码语言，默认为JS
                lang: {
                    type: String,
                    default: "javascript"
                }
            },
            computed: {
                codeClass: function() {
                    return "language-" + this.lang;
                }
            },
            mounted() {
                Prism.highlightAll();
            },
            updated() {
                Prism.highlightAll();
            }
        };
        </script>`
    }, {
        type: 'text',
        con: `这里我们将从父页面传递过来的 code 变量设置为必需项，若用户未定义，则控制台打印错误。同时考虑我们使用 javascript 语言较多，我们将代码语言默认设置为 javascript。
        代码改造后，我们就可以通过以下方式在父页面中使用了，其中 code，code1 为用户定义的代码变量：`
    }, {
        type: 'code',
        lang: 'html',
        con: `<CodeHighLight :code="code"></CodeHighLight> 
        <CodeHighLight :code="code1" lang="css"></CodeHighLight>`
    }, {
        type: 'text',
        con: `如无意外，你可以在页面中可看到类似下面的效果：`
    }, {
        type: 'img',
        con: 'https://cdn.nlark.com/yuque/0/2020/png/1076531/1585298124942-7536932f-306f-4677-81fa-1d91957bd21c.png'
    }, {
        type: 'text',
        con: `到这里，其实用户已经可以使用该组件了，但为了更好的用户体验及提高组件的灵活性，我们还需要在此基础上进行进一步的更新迭代。
        可选的但不限于：显示代码的行号，显示代码的语言，对代码块中的局部代码进行着重显示等。
        查阅 Prismjs 官方文档后发现，官方已经为我们提供了很多可选的插件，找到对应的插件名后，我们就可以在 babel.config.js 中对 prismjs 的插件进行配置了。`
    }, {
        type: 'code',
        lang: 'javascript',
        con: `'plugins': [
            ["prismjs",
                {
                    "languages": ['html', "javascript", "css", "markup"],
                    "plugins": ['match-braces', 'autolinker', 'inline-color', 'normalize-whitespace', 'copy-to-clipboard', 'show-language', 'line-numbers', 'line-highlight'],
                    "css": true
                }
            ]
        ]`
    }, {
        type: 'text',
        con: `以上的插件名及对应的作用可以查阅 Prismjs 官方文档，完成插件配置后，我们需要增加几个组件的 prop，用于接收父组件定义的局部高亮代码行数，高亮背景色等变量，具体可到 Lovue 项目 github 仓库查看。`
    }, {
        type: 'text',
        con: `至此，我们重启项目，已经可以看到类似下面的效果了：`
    }, {
        type: 'img',
        con: 'https://cdn.nlark.com/yuque/0/2020/png/1076531/1586586323544-7f85f964-158a-4766-9483-bd4609ace55a.png'
    }, {
        type: 'text',
        con: `效果不错，保存好这版代码，我们继续往下，看下如何实现代码高亮主题切换的功能。`
    }, {
        type: 'text',
        con: `Vue 本身为我们提供了 class 及 style 的数据绑定功能，也有同学分享过相关的使用方法。但因为 Prismjs 的内部实现是将用户代码根据语言类型解析并拆分成不同的字符分组，然后针对不同分组在其上应用不同的 class。在 Prismjs 提供的不同主题文件中，相同分组的 class 名均相同，因此我们无法直接通过使用 class 数据绑定的形式进行主题的切换`
    }, {
        type: 'quote',
        con: `使用该思路，一种可行的方式是采用 Scss 等 css 预编译工具对不同主题的 css 代码统一增加前缀 class 类名（不同主题类名不同），然后使用数据绑定功能进行类名/主题切换。但操作起来很不方便，这里不讨论。`
    }, {
        type: 'text',
        con: `这里采用另一种方式，在页面中通过 link 标签引入主题 css 文件，在用户切换不同的主题时，替换 link 标签的 href 值为对应的主题 css 文件，实现代码主题切换。该方式的核心代码如下，感兴趣的可到 Lovue 项目仓库查看：`
    }, {
        type: 'code',
        con: `methods: {
            addCss(theme) {
                let link = document.createElement("link");
                let head = document.getElementsByTagName("head")[0];
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = this.cssPrefix + theme + ".css";
                head.appendChild(link);
            },
            loadCss(theme) {
                let cssLink = "link[href^='" + this.cssPrefix + "']";
                let link = document.head.querySelectorAll(cssLink);
                if (link.length) {
                    // 判断主题css文件是否存在
                    for (let i = 0; i < link.length; i++)
                        link[i].href = this.cssPrefix + theme + ".css";
                    return;
                }
                this.addCss(theme);
                console.log("loadCss done.");
            }
        },
        watch: {
            // 监听theme变化，加载对应主题的css文件
            theme: function(newVal) {
                this.loadCss(newVal);
                localStorage.setItem("codeTheme", newVal);
            }
        },
        mounted() {
            this.loadCss(theme);
        }`
    }, {
        type: 'quote',
        con: `这里使用了 localStorage 来读取和保存用户选择的主题，以提升用户体验`
    }, {
        type: 'text',
        con: `至此，Lovue 项目中的代码高亮组件已基本完成。整个过程不复杂，感兴趣的可以动手创建属于自己的组件了。`
    }, {
        type: 'example',
        con: 'example2',
        code: `import Lovue from '@/components/Lovue'

        // 1.全局注册
        Vue.components('lovue', Lovue)
        
        // 2.Vue实例内部局部注册
        const vm = new Vue({
          el: '#app',
          components: {
            Lovue
          }
        })`,
        source: '/lovue/article/vueComponent/example2.html'
    }]
}