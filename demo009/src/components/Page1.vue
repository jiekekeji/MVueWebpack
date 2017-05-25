<template>
  <div class="container">
    <h2>这是Page1.vue组件</h2>
    <button @click="changeCount()">改变store中count的值</button>
  </div>
</template>
<script>
//  import store from '../store/store';
  import { mapState } from 'vuex'

  export default{
    data(){
      return {}
    },
    components: {},
    computed: {},
    methods: {
      changeCount(){
        //提交改变状态count
        this.$store.commit("increase");
      },
    },
    created () {
    },
  }
</script>
<style scoped>
  .container {
    width: 100%;
    height: auto;
    overflow: hidden;
    border: 1px solid gray;
  }

  h2 {
    background-color: azure;
  }
</style>
