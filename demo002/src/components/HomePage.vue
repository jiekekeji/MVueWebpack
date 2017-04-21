<!--这是主页-->
<template>
    <div>
        <!--顶部导航-->
        <NavTop></NavTop>

        <!--中间切换部分-->
        <router-view></router-view>

        <!--顶部导航-->
        <NavBottom></NavBottom>
    </div>
</template>

<script>
  import NavTop from "../components/NavTop.vue"
  import NavBottom from "../components/NavBottom.vue"

  export default {
    data () {
      return {}
    },
    components: {
      NavTop,
      NavBottom
    }
  }
</script>

<style scoped>
</style>
