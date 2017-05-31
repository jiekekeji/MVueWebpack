vue-初始自定义指令
--------------------

除了默认设置的核心指令( v-model 和 v-show ),Vue 也允许注册自定义指令。可全局注册自定义指令，也可局部注册自定义指令。

一、全局注册一个自定义指令 v-demo:

1、如何注册自定义指令? 在./src/directive目录下新建demo.js文件，文件编辑如下：

```
//引入Vue
import Vue from "vue"

//注册全局指令demo
Vue.directive('demo', {

  /**
   * 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
   * @param el:指令所绑定的元素，可以用来直接操作 DOM
   * @param binding:一个对象
   * @param vnode：Vue编译生成的虚拟节点
   * @param oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
   */
  bind: function (el, binding, vnode, oldVnode) {
    console.log("bind el", el);
    console.log("bind binding", binding);
    console.log("bind binding", binding.value);
    console.log("bind vnode", vnode);
    console.log("bind oldVnode", oldVnode);
  },

  /**
   * 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
   * @param el
   */
  inserted: function (el, binding, vnode, oldVnode) {
    console.log("inserted el", el);
    console.log("inserted binding", binding);
    console.log("inserted binding", binding.value);
    console.log("inserted vnode", vnode);
    console.log("inserted oldVnode", oldVnode);
  },

  /**
   * 被绑定元素所在的模板更新时调用，不是根据绑定值的变化。
   * 通过比较更新前后的绑定值，可以忽略不必要的模板更新。
   * @param el
   * @param binding
   * @param vnode
   * @param oldVnode
   */
  update: function (el, binding, vnode, oldVnode) {
    console.log("update el", el);
    console.log("update binding", binding);
    console.log("update binding", binding.value);
    console.log("update vnode", vnode);
    console.log("update oldVnode", oldVnode);
    console.log("update oldVnode", vnode === oldVnode);
  },

  /**
   * 被绑定元素所在模板完成一次更新周期时调用
   * @param el
   * @param binding
   * @param vnode
   * @param oldVnode
   */
  componentUpdated: function (el, binding, vnode, oldVnode) {
    console.log("componentUpdated el", el);
    console.log("componentUpdated binding", binding);
    console.log("componentUpdated binding", binding.value);
    console.log("componentUpdated vnode", vnode);
    console.log("componentUpdated oldVnode", oldVnode);
    console.log("componentUpdated oldVnode", vnode === oldVnode);
  },

  /**
   *  只调用一次， 指令与元素解绑时调用(例如路由跳转切换组件)。
   * @param el
   * @param binding
   * @param vnode
   * @param oldVnode
   */
  unbind: function (el, binding, vnode, oldVnode) {
    console.log("unbind el", el);
    console.log("unbind binding", binding);
    console.log("unbind binding", binding.value);
    console.log("unbind vnode", vnode);
    console.log("unbind oldVnode", oldVnode);
    console.log("unbind oldVnode", vnode === oldVnode);
  }
});
```

2、如何使用自定义指令。在Hello.vue使用自定义指令v-demo的示例：

```
<template>
  <div class="hello">
    <h3>使用全局注册的自定义指令：v-demo</h3>

    <!--绑定对象值-->
    <label>将自定义指令绑定到：input元素上</label><br>
    <input v-demo="student" v-model="student.name" placeholder="姓名"></input>
    <input v-demo="student" v-model="student.age" placeholder="年龄"></input>

    <!--路由切换组件 ，模拟触发unbind钩子函数-->
    <br>
    <router-link to="/page1">切换到Page1</router-link>
  </div>
</template>

<script>
  //引入demo.js
  import directive from "../directive/demo"
  export default {
    data () {
      return {
        txt: "",
        student: {
          name: "",
          age: ""
        }
      }
    },
  }
</script>
```
