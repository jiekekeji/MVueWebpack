<template>
  <div>
    <render-demo3 :level="level"></render-demo3>
  </div>
</template>

<script>
  import demo2 from "../render/demo3"
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
