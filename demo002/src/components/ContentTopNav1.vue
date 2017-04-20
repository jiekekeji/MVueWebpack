<template>
    <div class="content">
        <span>主体内容组件</span>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
<style scoped>
    .content {
        width: 1240px;
        height: 380px;
        margin: 0 auto;
        background-color: darkgrey;
        line-height: 120px;
        text-align: center;
    }
</style>