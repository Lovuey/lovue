export default {
    title: "计算属性和侦听器",
    subTitle: `本节我们来学习Vue中非常重要的概念：计算属性和侦听器。
  由于模版语法中只支持Javascript表达式，对于很多需要Javascript语句来计算的复杂逻辑，不能单独依赖表达式来表示。
  故Vue提供了计算属性，它的出现方便了我们处理复杂逻辑并可实时响应数据的变化。`,
    author: {
        name: "张家博",
        link: "https://github.com/jarbozhang"
    },
    footer: [
        {
            title: '关于 Vue 中计算与侦听属性的一些思考',
            link: 'https://mp.weixin.qq.com/s/xlilwHoVtmOE0Ogf1h_DyA'
        },
        {
            title: 'Vue.js 官网关于计算属性和侦听器的描述',
            link: 'https://cn.vuejs.org/v2/guide/computed.html'
        },
        {
            title: 'Vue.js 官网 API',
            link: 'https://cn.vuejs.org/v2/api/#computed'
        }
    ],
    nodes: [
        {
            type: 'text',
            con: `让我们先来通过一个简单的例子来体验一下计算属性的应用效果。
            因为我很喜欢喝茶，但是我记不清红茶下面的每个制作工艺，所以我们来用红茶的分类来体验一下计算属性:`
        },
        {
            type: 'img',
            con: 'https://i.loli.net/2020/04/11/AIDMK8mnE35FZoQ.png',
            width: "300px"
        },
        {
            type: 'code',
            lang: 'js',
            con: `
            <template>
                <div id="app">
                    <h3>{{name}}</h3>
                    <h3>{{category}}</h3>
                </div>
            </template>
            <script>
                const datasource = [{
                    category: '小种红茶',
                    list: ['正山小种', '外山小种']
                }, {
                    category: '功夫红茶',
                    list: ['大叶功夫', '小叶功夫']
                }, {
                    category: '红碎茶',
                    list: ['叶茶', '碎茶', '片茶', '末茶']
                }]
              export default {
                name: "App",
                data: function() {
                  return {
                    name: '叶茶'
                  }
                },
                computed: {
                  category: function() {
                    let res = ''
                    datasource.some(data => {
                      if(data.list.filter(item => item === this.name).length > 0) {
                        res = data.category
                        return true
                      }
                      return false
                    })
                    return res
                  }
                }
              };
              </script>`
        },
        {
            type: 'text',
            con: `我们可以看到目前首先维护一个红茶种类和二级类别的对应关系（本段只匹配到了二级类别），
            当指定了数据为“叶茶”时，我们想知道这是哪一种制作工艺。由于像datasource这样的对应关系我们很难通过表达式直接得到结果。
            故需要使用计算属性'category'。通过以上的代码段我们学习了计算属性的使用场景和使用方法。`
        },
        {
            type: 'text',
            con: `现在我们来进行一些小修改，让数据属性接收我们的输入，看计算属性是否能够响应。例如当我们输入正山小种时，计算属性是否能更新为小种红茶。`
        },
        {
            type: 'code',
            lang: 'js',
            stressLine: '3',
            con: `
            <template>
                <div id="app">
                    <input v-model="name">
                    <h3>{{category}}</h3>
                </div>
            </template>
            <script>
                const datasource = [{
                    category: '小种红茶',
                    list: ['正山小种', '外山小种']
                }, {
                    category: '功夫红茶',
                    list: ['大叶功夫', '小叶功夫']
                }, {
                    category: '红碎茶',
                    list: ['叶茶', '碎茶', '片茶', '末茶']
                }]
              export default {
                name: "App",
                data: function() {
                  return {
                    name: '叶茶'
                  }
                },
                computed: {
                  category: function() {
                    let res = ''
                    datasource.some(data => {
                      if(data.list.filter(item => item === this.name).length > 0) {
                        res = data.category
                        return true
                      }
                      return false
                    })
                    return res
                  }
                }
              };
              </script>`
        },
        {
            type: 'text',
            con: `现在可以尝试输入大叶功夫、碎茶等文字，我们会发现计算属性会实时地根据数据来更新。`
        },
        {
            type: 'text',
            con: `当然计算属性也可以使用方法（methods）来实现，methods相当于我们平常使用的javascript方法，
            可在声明周期钩子中调用，也可以相互之间调用。可以是一段简短的逻辑，也可以是一段处理复杂的异步操作，比较灵活。
            但是和计算属性不同的是，methods在每次重新渲染时总会再次执行函数，而计算属性当有相同的输入时，由于已经有了缓存，同时拥有纯函数的特性，
            计算属性便不会再次执行以期得到较高的效率。`
        },
        {
            type: 'code',
            lang: 'js',
            stressLine: '4,25-37',
            con: `
            <template>
                <div id="app">
                    <input v-model="name">
                    <h3>{{getCategory()}}</h3>
                </div>
            </template>
            <script>
                const datasource = [{
                    category: '小种红茶',
                    list: ['正山小种', '外山小种']
                }, {
                    category: '功夫红茶',
                    list: ['大叶功夫', '小叶功夫']
                }, {
                    category: '红碎茶',
                    list: ['叶茶', '碎茶', '片茶', '末茶']
                }]
              export default {
                name: "App",
                data: function() {
                  return {
                    name: '叶茶'
                  }
                },
                methods: {
                    getCategory: function() {
                        let res = ''
                        datasource.some(data => {
                            if(data.list.filter(item => item === this.name).length > 0) {
                                res = data.category
                                return true
                            }
                            return false
                        })
                      return res
                    }
                }
              };
              </script>`
        },
        {
            type: 'text',
            con: `最后不要忘了作为有力的补充，侦听器（watch）选项在异步情况下非常的有用，它做的事情就是侦听数据变化时调用的方法。
            我们可以用侦听器去侦听data属性的改变，也可以去侦听computed属性的变化。侦听属性同样也可以调用methods中的方法。`
        },
        {
            type: 'code',
            con: `
            <template>
                <div id="app">
                    <input v-model="name">
                    <h3>{{category}}</h3>
                    <h2>{{title}}</h2>
                </div>
            </template>
            <script>
                const datasource = [{
                    category: '小种红茶',
                    list: ['正山小种', '外山小种']
                }, {
                    category: '功夫红茶',
                    list: ['大叶功夫', '小叶功夫']
                }, {
                    category: '红碎茶',
                    list: ['叶茶', '碎茶', '片茶', '末茶']
                }]
              export default {
                name: "App",
                data: function() {
                  return {
                    name: '叶茶',
                    title: '红茶'
                  }
                },
                computed: {
                    category: function() {
                      let res = ''
                      datasource.some(data => {
                        if(data.list.filter(item => item === this.name).length > 0) {
                          res = data.category
                          return true
                        }
                        return false
                      })
                      return res
                    }
                },
                watch: {
                    category: function(newCategory, oldCategory ) {
                      console.log(newCategory)
                      if(newCategory !== '') {
                        this.title = '红茶'
                      } else {
                        this.title = '非红茶'
                      }
                    }
                },
              };
              </script>`
        },
        {
            type: 'text',
            con: `可以看到，当输入框中的内容并不是二级类别中的文字时，数据属性title的值被更新为非红茶。
            虽然我们例子是watch属性中调用了同步的方法，但异步方法与之大同小异，此处只作为例子展现。`
        },
        {
            type: 'text',
            con: `如果希望了解更多的关于为什么计算属性只是简单地使用了 data 属性，就建立起了两者的依赖关系，
            计算属性的缓存是如何实现的这些知识点的话可以参考文末的参考链接：关于 Vue 中计算与侦听属性的一些思考。`
        }
    ]
}