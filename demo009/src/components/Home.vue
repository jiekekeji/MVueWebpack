<template>
  <div class="container">
    <h2>这是Home.vue组件</h2>
    <div class="container">
      <p>获取store中的count值count={{getCount}}</p>
      <p>获取store中的isLogin值isLogin={{isLogin}}</p>
    </div>
    <page1></page1>
    <page2></page2>
  </div>
</template>

<script>
  //  import store from "../store/store"

  import page1 from "../components/Page1.vue"
  import page2 from "../components/Page2.vue"
  export default {
    data () {
      return {}
    },
    components: {page1, page2},
    computed: {
      //监听store中count的变化
      getCount(){
        return this.$store.state.count;
      },
      //通过getters过滤监听isLogin
      isLogin(){
        return this.$store.getters.getIsLogin
      }
    },
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  h2 {
    background-color: darkseagreen;
  }
</style>
