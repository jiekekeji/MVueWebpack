<template>
  <div>
    <render-demo4 :level="level"></render-demo4>
  </div>
</template>

<script>
  import demo4 from "../render/demo4"
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
