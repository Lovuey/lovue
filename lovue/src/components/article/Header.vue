<template>
    <div class="post-header">
        <p class="title">{{ article.title }}</p>
        <p class="des">{{ article.subTitle }}</p>
        <p class="author">作者：<a :href="article.author.link" target="_blank">{{ article.author.name }}</a></p>
        <!-- 代码主题切换 -->
        <div class="code-theme">
            <label for="theme-choice">代码主题 </label>
            <select class="form-control" name="theme-choice" id="theme-choice" v-model='theme'>
                <option v-for="(key,value,index) in themeList" :key="index" :value="value">{{key}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
let defaultTheme = "tomorrow";
let theme = localStorage.getItem("codeTheme")
    ? localStorage.getItem("codeTheme")
    : defaultTheme;
export default {
    name: "articleHeader",
    props: {
        article: Object
    },
    data() {
        return {
            cssPrefix: "./themes/prism-",
            defaultTheme,
            theme,
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
    watch: {
        theme: function(newVal) {
            this.loadCss(newVal);
            localStorage.setItem("codeTheme", newVal);
        }
    },
    mounted() {
        this.loadCss(theme);
    }
};
</script>

<style lang="less" scoped>
@import "../../styles/article.less";
</style>