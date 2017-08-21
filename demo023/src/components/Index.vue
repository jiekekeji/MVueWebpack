<template>
  <div class="container">
    <!--引用语言配置文件index.js里面message下面的hello-->
    <p>{{ $t("message.hello") }}</p>
    <button @click="changLanguage1">中文</button>
    <button @click="changLanguage2">英文</button>
  </div>
</template>

<script>
  //导入配置文件
  import {i18n} from "../language/index"
  export default {
    data () {
      return {}
    },
    //将i18n配置进来
    i18n,
    components: {},
    watch: {},
    computed: {},
    activated(){
    },
    beforeRouteLeave (to, from, next) {
      next();
    },
    methods: {
      //切换语言的方法
      changLanguage1(){
        i18n.locale = "zh";
      },
      changLanguage2(){
        i18n.locale = "en";
      },
    }
  }
</script>
<style lang="scss" scoped="" type="text/scss">
  .container {
    p {
      color: red;
    }
  }
</style>
