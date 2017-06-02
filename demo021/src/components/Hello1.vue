<template>
  <div>
    <div>
      <!--使用demo1定义的组件 render-demo1-->
      <render-demo1 :level="8"></render-demo1>
    </div>
    <div class="item">
      <router-link to="/hello2">Render createElement之v-if</router-link>
      <router-link to="/hello3">Render createElement之v-for</router-link>
      <router-link to="/hello4">Render  JSX</router-link>
    </div>
  </div>
</template>

<script>
  import demo1 from "../render/demo1"
  export default {
    data () {
      return {}
    },
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    line-height: 30px;
    text-align: center;
    height: 30px;
    width: 280px;
    display: block;
    background-color: darkseagreen;
  }

  .item {
    margin-top: 30px;
  }

  .item > a {
    margin-top: 30px;
  }
</style>
