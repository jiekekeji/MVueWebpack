<template>
  <div class="container">
    <h2>这是Page2.vue组件</h2>
    <div class="container">
      <p>通过mapState获取多个状态</p>
      <p>获取store中的count值count={{localCount}}</p>
      <p>获取store中的isLogin值isLogin={{isLogin}}</p>
    </div>
    <div class="container">
      <p>通过mapGetters获取多个状态</p>
      <p>获取store中的count值count={{localCount}}</p>
      <p>获取store中的isLogin值isLogin={{isLogin}}</p>
    </div>
  </div>
</template>
<script>
  //  import store from '../store/store';
  import {mapGetters} from 'vuex'
  import {mapState} from 'vuex'
  export default{
    data(){
      return {}
    },
    components: {},
    methods: {},
    computed: {
      ...mapState({
        //将state中对个值映射为当前组件的computed属性
        //类似写多个computed获取值
        //相当于在computed中定义了localCount属性
        localCount: "count",
        isLogin: state => state.isLogin,

      }),
      ...mapGetters([
          "getIsLogin",
          "getCount"
        ]
      )
    },

  }
</script>
<style scoped>
  .container {
    width: 100%;
    height: auto;
    overflow: hidden;
    border: 1px solid green;
  }

  h2 {
    background-color: darkseagreen;
  }
</style>
