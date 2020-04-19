export default {
    title: "表单输入与绑定",
    subTitle: `本节我们来学习Vue中的一个概念：输入绑定。
  简单来说, 就是可以用v-model监听用户的输入事件(主要是表单元素), 然后有方法更新数据`,
    author: {
        name: "李楚煌",
        link: "https://github.com/chuhuangvio"
    },
    footer: [
        {
            title: '关于 Vue 中的表单绑定_官方文档',
            link: 'https://cn.vuejs.org/v2/guide/forms.html'
        },
        {
            title: 'Vue的表单绑定sandbox',
            link: 'https://codesandbox.io/s/sleepy-ellis-cw9ug'
        },
    ],
    nodes: [
        {
            type: 'text',
            con: `让我们先来通过一个复习一下事件绑定。
            通过事件绑定与表单绑定的不同来感受事件绑定`
        },
        // {
        //     type: 'img',
        //     con: 'https://i.loli.net/2020/04/11/AIDMK8mnE35FZoQ.png',
        //     width: "300px"
        // },
        {
            type: 'code',
            lang: 'js',
            con: `
            <template>
                <div id="app">
                    <div>事件绑定: {{message}}</div>
                    <button v-on:click="reverseMessage">Reverse Message</button>
                </div>
            </template>
            <script>
            export default {
                name: "App",
                data() {
                    return {
                        inputMsg: ''
                    }
                },
                methods: {
                    reverseMessage() {
                      this.message = this.message.split('').reverse().join('')
                    }
                },
               
            };
            </script>
            `
        },
        {
            type: 'text',
            con: `当我们点击'Reverse Message'按钮时, 上方的字体会改变, 这是因为我们为按钮添加了一个事件, 这个事件触发一个函数,
            函数里写了'我们要改变的事情', 现在改变的事情是让上方的字倒序写.`
        },
        {
            type: 'text',
            con: `现在我们来加入表单绑定，在input框输入字符，看下方的字是否能实时显示。`
        },
        {
            type: 'code',
            lang: 'js',
            stressLine: '3',
            con: `
            <template>
              <div id="app">
                 <input v-model="inputMsg" placeholder="表单绑定 请输入">
                 <div>您输入的是{{inputMsg}}</div>
                 <div>事件绑定: {{message}}</div>
                <button v-on:click="reverseMessage">Reverse Message</button>
              </div>
            </template>

            <script>
            import HelloWorld from "./components/HelloWorld";
            
            export default {
              name: "App",
              data() {
                return {
                  message: '试试点击下方的按钮',
                  inputMsg: ''
                }
              },
              methods: {
                reverseMessage() {
                  this.message = this.message.split('').reverse().join('')
                }
              },
              components: {
                HelloWorld
              }
            };
            </script>
            `
        },
        {
            type: 'text',
            con: `现在可以尝试输入hello, hi等字符，会发现下方的数据会实时更新。`
        },
        {
            type: 'text',
            con: `这就是表单绑定的特性, 实时监听表单元素(的变化), 实时更新. 
            事件监听是不一样的, 事件监听是要人去做操作(比如点击、鼠标滑过)来触发更新.`
        },

        {
            type: 'text',
            con: `还有其他表单元素(比如复选框、单选按钮、多行文本)的绑定, 可以看参考链接中的官方文档, 里面有这些表单元素的绑定方法.`
        },
        {
            type: 'text',
            con: `然后我做了代码沙盒, 直接点击下方的'Vue的表单绑定sandbox', 即可操作表单绑定和事件绑定`
        }
    ]
}