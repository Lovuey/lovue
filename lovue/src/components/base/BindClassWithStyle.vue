<template>
    <div>
        <h3>绑定Class</h3>
        <h4>绑定对象</h4>
        <p :class="{active:isActive}">行内元素绑定</p>
        <p :class="classObject" class="normal">对象绑定</p>
        <p :class="objectComputed">计算属性绑定</p>

        <h4>绑定数组</h4>
        <p :class="[firstClass,secondClass]">行内元素绑定</p>
        <p :class="arrayObject" class="arrayWeight">数组绑定</p>
        <p :class="arrayComputed">计算属性绑定</p>
        <p :class="[isActive?firstClass:secondClass]">三元表达式</p>
        <p :class="[{arrayActive:isActive,arraySize:isActive}]">多重判断,数组中元素也可以是对象</p>

        <h4>绑定组件</h4>
        <class-style class="componentActive componentSize"></class-style>
        <!--  不支持数组绑定  -->
        <class-style :class="[componentActive,componentSize]"></class-style>
        <class-style :class="componentObject"></class-style>
        <class-style :class="{componentActive:isActive}"></class-style>
        <class-style :class="arrayComputed"></class-style>
        <class-style :class="arrayObject"></class-style>
        <class-style :class="isActive?firstClass:secondClass"></class-style>
        <class-style :class="[{arrayActive:isActive,arraySize:isActive}]"></class-style>

        <h3>绑定style</h3>
        <p :style="{color:styleColor,fontSize:fontSize+'px'}">行内样式绑定</p>
        <p :style="styleObject">对象绑定</p>

    </div>
</template>
<script>
    export default {
        name: "BindClassWithStyle",
        data() {
            return {
                isActive: true,
                classObject: {
                    active: true,
                    changeSize: true
                },
                arrayObject: [
                    'arrayActive', 'arraySize'
                ],
                componentObject: [
                    'componentActive', 'componentSize'
                ],
                firstClass: 'arrayActive',
                secondClass: 'arraySize',
                count: 10,
                styleColor: '#35bcdc',
                fontSize: 18,
                styleObject: {
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#999999'

                }
            }
        }, computed: {
            objectComputed() {
                return this.count > 1 ? 'active' : ''
            },
            arrayComputed() {
                //当arrayObject中存在array字符串则显示这个class
                return this.arrayObject.filter(item => item.indexOf('array') !== -1)
            }
        }, components: {
            classStyle: {
                template: `<p class="componentNormal">我是组件</p>`
            }

        }
    }
</script>

<style scoped>
    .active {
        color: red;
    }

    .changeSize {
        font-size: 44px;
    }

    .normal {
        font-weight: bold;
    }

    .arrayActive {
        color: purple;
    }

    .arraySize {
        font-size: 48px;
    }

    .arrayWeight {
        font-weight: bold;
    }

    .componentActive {
        color: deeppink;
    }

    .componentSize {
        font-size: 56px;
    }

    .componentNormal {
        font-weight: lighter;
    }
</style>