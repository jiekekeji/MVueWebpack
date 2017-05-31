<template>
  <div>
    <h3>这是Page1,使用局部注册的自定义指令：v-demo019</h3>

    <!--也可以绑定对象值-->
    <label for="input2">将自定义指令绑定到：input元素上</label><br>
    <input id="input2" v-demo019="txt" v-model="txt"></input>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        txt: "",
      }
    },
    directives: {
      demo019: {
        /**
         * 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
         * @param el:指令所绑定的元素，可以用来直接操作 DOM
         * @param binding:一个对象
         * @param vnode：Vue编译生成的虚拟节点
         * @param oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
         */
        bind: function (el, binding, vnode, oldVnode) {
          console.log("page1 bind el", el);
          console.log("page1 bind binding", binding);
          console.log("page1 bind binding", binding.value);
          console.log("page1 bind vnode", vnode);
          console.log("page1 bind oldVnode", oldVnode);
        },

        /**
         * 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
         * @param el
         */
        inserted: function (el, binding, vnode, oldVnode) {
          console.log("page1 inserted el", el);
          console.log("page1 inserted binding", binding);
          console.log("page1 inserted binding", binding.value);
          console.log("page1 inserted vnode", vnode);
          console.log("page1 inserted oldVnode", oldVnode);
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
          console.log("page1 update el", el);
          console.log("page1 update binding", binding);
          console.log("page1 update binding", binding.value);
          console.log("page1 update vnode", vnode);
          console.log("page1 update oldVnode", oldVnode);
          console.log("page1 update oldVnode", vnode === oldVnode);
        },

        /**
         * 被绑定元素所在模板完成一次更新周期时调用
         * @param el
         * @param binding
         * @param vnode
         * @param oldVnode
         */
        componentUpdated: function (el, binding, vnode, oldVnode) {
          console.log("page1 componentUpdated el", el);
          console.log("page1 componentUpdated binding", binding);
          console.log("page1 componentUpdated binding", binding.value);
          console.log("page1 componentUpdated vnode", vnode);
          console.log("page1 componentUpdated oldVnode", oldVnode);
          console.log("page1 componentUpdated oldVnode", vnode === oldVnode);
        },

        /**
         *  只调用一次， 指令与元素解绑时调用(例如路由跳转切换组件)。
         * @param el
         * @param binding
         * @param vnode
         * @param oldVnode
         */
        unbind: function (el, binding, vnode, oldVnode) {
          console.log("page1 unbind el", el);
          console.log("page1 unbind binding", binding);
          console.log("page1 unbind binding", binding.value);
          console.log("page1 unbind vnode", vnode);
          console.log("page1 unbind oldVnode", oldVnode);
          console.log("page1 unbind oldVnode", vnode === oldVnode);
        }
      }
    }
  }
</script>

<style scoped>
</style>
