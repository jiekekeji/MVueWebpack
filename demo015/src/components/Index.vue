<template>
  <div>

    <h3>这是首页</h3>

    <div>
      <router-link to="/page1">到Page1页面</router-link>
    </div>
    <div>
      <router-link to="/page2">到Page2页面</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>

</style>
