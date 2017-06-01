<template>
  <div>

    <render-demo2 :level="level"></render-demo2>
    <button @click="change()">显示和隐藏</button>

  </div>
</template>

<script>
  import demo2 from "../render/demo2"
  export default {
    data () {
      return {
        level: 0
      }
    },
    methods: {
      change(){
        this.level++;
      }
    }
  }
</script>

<style scoped>
</style>
