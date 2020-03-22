<template>
    <div>
        <label>主题切换
            <select
                class="form-control"
                name="theme-choice"
                v-model='theme'
            >
                <option
                    v-for="(key,value,index) in themeList"
                    :key="index"
                    :value="value"
                >{{key}}</option>
            </select></label>
        <pre
            v-if="code"
            :data-line='dataLine'
            :class="{'line-numbers':lineNumbers}"
        ><code :class="codeClass" class="match-braces" v-text="code">
      </code></pre>
    </div>
</template>
<script>
import Prism from "prismjs";
Prism.plugins.NormalizeWhitespace.setDefaults({
    "remove-trailing": true, // 移除多余空格
    "remove-indent": true, // 移除代码块整体的不必要缩进
    "left-trim": true, // 移除代码块头的空格
    "right-trim": true, //移除代码块尾的空格
    "break-lines": 80 //超过80字符自动换行
    // 'indent': 1, //每行添加缩进
    // 'tabs-to-spaces': 4, //
    // 'spaces-to-tabs': 4 //
});

export default {
    name: "CodeHighLight",
    props: {
        code: { type: String, required: true }, //父组件的代码块变量
        lang: { type: String, default: "javascript" }, //代码语言，默认为JS
        lineNumbers: { type: Boolean, default: true }, //是否显示行号，默认显示
        dataLine: { default: false }, //针对指定行数代码样式进行自定义
        localCodeBgColor: { type: String } // 设置局部代码高亮背景色，不设置默认为rgba(0, 255, 255, 0.2)
    },
    data() {
        return {
            cssPrefix: "/themes/prism-",
            theme: "",
            defaultTheme:'tomorrow',
            themeList: {
                // "coy",
                dark: "Dark",
                // "funky",
                okaidia: "Okadia",
                solarizedlight: "Solarized Light",
                tomorrow: "Tomorrow Night",
                twilight: "Twilight"
            }
        };
    },
    methods: {
        highlightAll() {
            // 初始化
            if (this.localCodeBgColor) {
                this.changeLocalCodeColor();
            }
            Prism.highlightAll();
        },
        changeLocalCodeColor() {
            // 切换局部代码样式
            document.documentElement.style.setProperty(
                "--local-code-bgc",
                this.localCodeBgColor
            );
        },
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
        },
        getCodeTheme() {
            this.theme = localStorage.getItem("codeTheme")
                ? localStorage.getItem("codeTheme")
                : this.defaultTheme;
        }
    },
    computed: {
        codeClass: function() {
            return "language-" + this.lang;
        }
    },
    watch: {
        theme: function(newVal) {
            this.loadCss(newVal);
        }
    },
    mounted() {
        this.getCodeTheme();
        this.highlightAll();
    },
    updated() {
        this.highlightAll();
    }
};
</script>
<style>
:root {
    --local-code-bgc: rgba(0, 255, 255, 0.1);
}

/* 放入scoped内部无效，暂通过全局样式定义 */
/* 局部代码自定义样式 */
.line-highlight {
    /* background: rgba(0, 255, 255, 0.2); */
    background: var(--local-code-bgc);
    margin-left: 3.5rem;
    /* border: solid 1px rgba(0, 255, 255, 0.3); */
}

/* 代码中括号选中样式 */
.token.punctuation.brace-hover,
.token.punctuation.brace-selected {
    color: red;
    outline: none;
    font-weight: bold;
}
</style>
<style scoped>
pre {
    border-radius: 0.5rem;
    max-height: 25rem;
    overflow: auto;
}

/* 美化代码块滚动条样式 */
::-webkit-scrollbar-track-piece {
    background-color: #f8f8f8;
}
::-webkit-scrollbar {
    width: 0.75rem;
    height: 0.75rem;
}
::-webkit-scrollbar-thumb {
    border-radius: 0.375rem;
    background-color: #dddddd;
    background-clip: padding-box;
    min-height: 2rem;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
}
</style>