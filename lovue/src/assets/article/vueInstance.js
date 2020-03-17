export default {
    title: "Vue 实例详解",
    subTitle: "本 Demo 通过用 Vue 函数创建一个新的 Vue 实例。",
    author: {
        name: "素燕",
        link: "https://github.com/lefex/FE"
    },
    nodes: [
        {
            type: 'text',
            con: '在学习 Vue 之前，也许你已经看到过 <code>new Vue({})</code> 这样的代码，我们今天一起学习 Vue 实例。'
        },
        {
            type: 'code',
            lang: 'javascript',
            con:
`<script>
    const vmFooter = new Vue({
        // 提供一个 vue 实例的挂载节点，可以是一个选择器，或者是一个 HTMLElement
        el: '#app-footer',
        data: function () {
            return {
                footer: "感谢阅读",
            }
        }
    });
    // 访问 vue 实例的挂载节点
    console.log(vmFooter.$el);
</script>`
        },
    ]
};