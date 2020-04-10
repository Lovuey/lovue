<template>
    <div>
        <pre v-if="code" :data-line='dataLine' :class="{'line-numbers':lineNumbers}">
            <code :class="codeClass" class="match-braces" v-text="code"></code>
        </pre>
    </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
Prism.plugins.NormalizeWhitespace.setDefaults({
    // 移除多余空格
    "remove-trailing": true,
    // 移除代码块整体的不必要缩进
    "remove-indent": true,
    // 移除代码块头的空格
    "left-trim": true,
    // 移除代码块尾的空格
    "right-trim": true,
    // 超过80字符自动换行
    "break-lines": 80
    // 'indent': 1, //每行添加缩进
    // 'tabs-to-spaces': 4, //
    // 'spaces-to-tabs': 4 //
});
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
        },
        // 是否显示行号，默认显示
        lineNumbers: {
            type: Boolean,
            default: true
        },
        // 针对指定行数代码样式进行自定义
        dataLine: {
            default: false
        },
        // 设置局部代码高亮背景色，不设置默认为rgba(0, 255, 255, 0.2)
        localCodeBgColor: {
            type: String
        }
    },
    data() {
        return {
            cssPrefix: "./themes/prism-",
            defaultTheme: "tomorrow",
            theme: "",
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
            // console.log("highlight done.");
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
            // console.log("loadCss done.");
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
        this.highlightAll();
    },
    updated() {
        this.highlightAll();
    }
};
</script>

<style>
:root {
    --local-code-bgc: rgba(0, 255, 255, 0.2);
}
</style>

<style scoped>
pre {
    border-radius: 0.5rem;
    max-height: 25rem;
    overflow: auto;
}

pre /deep/ .line-highlight {
    background: var(--local-code-bgc);
    margin-left: 3.5rem;
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