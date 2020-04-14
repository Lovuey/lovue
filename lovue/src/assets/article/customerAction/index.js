export default {
    title: "Vue 自定义事件",
    subTitle: `本节我们来学习Vue中如何进行事件的自定义`,
    author: {
        name: "effortcheep",
        link: "https://effortcheep.github.io/"
    },
    footer: [
        {
            title: 'Vue.js 官网关于自定义事件的描述',
            link: 'https://cn.vuejs.org/v2/guide/components-custom-events.html'
        },
        {
            title: 'Vue.js 官网 API',
            link: 'https://cn.vuejs.org/v2/guide/'
        }
    ],
    nodes: [
        {
            type: 'text',
            con: `子组件`
        },
        {
            type: 'code',
            lang: 'js',
            con: `
            <template>
              <button @click="customerAction">按钮</button>
            </template>

            <script>
            export default {
              created() {
                this.$on("customerAction", function() {
                  console.log("子组件接收自己发射的事件")
                })
              },
              methods: {
                customerAction() {
                  console.log("子组件发射事件")
                  const param = {}
                  this.$emit("customer-action", param)
                }
              }
            }
            </script>`
        },
        {
            type: 'text',
            con: `注意：`
        },
        {
            type: 'text',
            con: `触发的事件名需要完全匹配监听这个事件所用的名称，事件名不存在任何自动化的大小写转换。`
        },
        {
            type: 'text',
            con: `比如`
        },
        {
            type: 'code',
            lang: `js`,
            con: `
              this.$emit("customerAction")`
        },
        {
            type: 'text',
            con: `如果是监听这个名字的 kebab-case(短划线) 版本是不会有任何效果的：`
        },
        {
            type: 'code',
            lang: `js`,
            con: `
              <my-component v-on:customer-action="doSomething"></my-component>`
        },
        {
            type: 'text',
            con: `所以 Vue 官方建议我们使用 kebab-case(短划线) 的事件名`
        },
        {
            type: 'text',
            con: `父组件`
        },
        {
            type: 'code',
            lang: 'js',
            con: `
            <template>
              <div id="app">
                <!-- 子组件 -->
                <customer-button @customer-action='customerAction'/>
              </div>
            </template>

            <script>
            import customerButton from "./components/customerButton"

            export default {
              components: { customerButton },
              methods: {
                customerAction(param) {
                  console.log("父组件接收事件")
                }
              }
            }
            </script>`
        },
        {
            type: 'text',
            con: `打印结果`
        },
        {
            type: 'code',
            lang: 'js',
            con: `
            子组件发射事件
            父组件接收事件
            子组件接收自己发射的事件`
        }
    ]
}