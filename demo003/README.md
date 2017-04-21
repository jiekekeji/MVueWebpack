vue-初识路由vue-router 2
-------------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo003/preview/icon-demo003-result.gif)

1、安装路由：

```
cnpm install vue-router --s
```

2、编辑App.vue,加入最顶层的路由入口 <router-view></router-view>，如下：

```
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
</style>

```

2、在./src/components新建Home.vue组件，编辑如下：

```
<template>
  <div>
    <h4 class="title">这是主页</h4>
    <p>
      <router-link to="/page2/content1">到Page2页面</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .title {
    height: 60px;
    line-height: 60px;
    text-indent: 10px;
    background-color: darkseagreen;
  }
</style>

```

2、在./src目录下新建目录router,加入文件index.js,该文件是路由的配置文件，如下：

```
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Content1 from '../components/Content1.vue'
import Content2 from '../components/Content2.vue'
import Page2 from '../components/Page2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      children: [
        {
          path: 'content1',
          name: 'Content1',
          component: Content1
        },
        {
          path: 'content2',
          name: 'Content2',
          component: Content2
        },
      ]
    }
  ]
})

```
