<template>
  <div>
    <h4 class="title">这是主页</h4>
    <p class="nav-page">
      <router-link to="/page1">到Page1页面</router-link>
    </p>
    <p class="nav-page">
      <router-link to="/page2">到Page2页面</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .title {
    height: 60px;
    line-height: 60px;
    text-indent: 10px;
    background-color: darkseagreen;
  }

  .nav-page {
    line-height: 60px;
    height: 60px;
    width: 180px;
    text-align: center;
    background-color: burlywood;
  }
</style>
