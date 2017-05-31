<template>
  <div class="hello">
    <h3>使用全局注册的自定义指令：v-demo</h3>

    <!--也可以绑定对象值-->
    <label>将自定义指令绑定到：input元素上</label><br>
    <input v-demo="student" v-model="student.name" placeholder="姓名"></input>
    <input v-demo="student" v-model="student.age" placeholder="年龄"></input>

    <!--路由切换组件 ，模拟触发unbind钩子函数-->
    <br>
    <router-link to="/page1">切换到Page1</router-link>
  </div>
</template>

<script>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
