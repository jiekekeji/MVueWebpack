<template>
  <div>
    <h4 class="title">这是主页</h4>
    <p>
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
</style>
