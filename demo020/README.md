vue-自定义指令v-imgLoad,实现在图片加载过程中显示loading样式,加载出错显示error样式
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo020/preview/020.gif)

除了默认设置的核心指令( v-model 和 v-show ),Vue 也允许注册自定义指令。可全局注册自定义指令，也可局部注册自定义指令。

一、全局注册一个自定义指令 v-imgLoad:

1、如何注册自定义指令? 在./src/directive目录下新建demo.js文件，文件编辑如下：

```
/import Vue from "vue"
 
 Vue.directive('imgLoad', {
 
     bind: function (el, binding, vnode, oldVnode) {
 
         //1、初始状态下，让img的背景图为我们绑定的背景binding.value
         el.style.backgroundImage = "url('" + binding.value.loading + "')";
         el.style.backgroundRepeat = "no-repeat";
         el.style.backgroundPosition = "center";
 
         //2、注册onload事件，加载完成后把背景图片设为无
         el.onload = function () {
             el.style.backgroundImage = "url('')";
             console.log("onload");
         }
 
         //3、注册onerror事件，出错时显示指定的错误图片
         el.onerror = function () {
             el.setAttribute("src", binding.value.error);
             console.log("onerror");
         }
     },
 
     inserted: function (el, binding, vnode, oldVnode) {
     },
 
     update: function (el, binding, vnode, oldVnode) {
     },
 
     componentUpdated: function (el, binding, vnode, oldVnode) {
     },
 
     unbind: function (el, binding, vnode, oldVnode) {
     }
 });
```

2、如何使用自定义指令。在Hello.vue使用自定义指令v-imgLoad的示例：

```
<template>
    <div class="hello">

        <h3 style="background-color: darkseagreen">
            自定义指令v-imgLoad,实现在图片加载过程中显示loading,加载出错显示error样式
        </h3>

        <!--绑定v-imgLoad指令，传递参数imgDefault-->
        <img v-imgLoad="imgDefault"
             src="https://github.com/jiekekeji/MVueWebpack/blob/master/demo019/1233preview/019.gif?raw=true123"
             height="300px" width="300px"/>
        <br>


        <div style="background-color: darkseagreen">
            <router-link to="/page1">切换到Page1</router-link>
        </div>

    </div>
</template>

<script>
    import directive from "../directive/demo";
    //加载中显示的图片
    import imgLoading from "../assets/loading.gif"
    //加载出错显示的图片
    import imgError from "../assets/error.jpg"
    export default {
        data () {
            return {
                imgDefault: {
                    error: imgError,
                    loading: imgLoading
                }
            }
        },
    }
</script>
```