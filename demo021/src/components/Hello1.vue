<template>
  <div>
    <render-demo1 :level="8"></render-demo1>

    <router-link to="/hello2">render进阶 v-if v-for</router-link>
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
</style>
