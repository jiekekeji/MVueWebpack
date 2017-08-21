vue-国际化(使用vue-i18n插件)
---
1、安装插件
===
```
npm install vue-i18n
```

2、新建语言配置文件index.js(配置中英文两个版本)：
===
```
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    en: {
      message: {
        hello: 'world hello'
      }
    },
    zh: {
      message: {
        hello: '世界'
      }
    }
  }
})
export {i18n}
```

3、在Index.vue组件中使用语言配置文件(index.js):
===
```
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
```
4、效果图：
![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo023/preview/demo023-1.png)
