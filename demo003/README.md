vue-初识路由vue-router 2
-------------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo003/preview/icon-demo003-result.gif)

vue-router 2的使用
-------------------------

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

3、在./src/components新建Home.vue组件，编辑如下：

```
<template>
  <div>
    <h4 class="title">这是主页</h4>
    <p class="nav-page">
      <router-link to="/page1">到Page1页面</router-link>
    </p>
    <p class="nav-page">
      <router-link to="/page2">到Page2页面</router-link>
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

  .nav-page {
    line-height: 60px;
    height: 60px;
    width: 180px;
    text-align: center;
    background-color: burlywood;
  }
</style>
```

4、在./src/components新建Page1.vue组件，添加的内容如下：

```
<template>
  <div>
    <h4 class="title">这是Page1</h4>
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
    background-color: blanchedalmond;
  }
</style>

```

5、在./src/components新建Page2.vue组件，Page2下有子路由入口<router-view></router-view>，添加编辑如下：

```
<template>
  <div>
    <ul class="menu">
      <li>
        <router-link to="/page2/content1">菜单1</router-link>
      </li>
      <li>
        <router-link to="/page2/content2">菜单2</router-link>
      </li>
    </ul>

    <router-view></router-view>

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
  .menu {
    height: 60px;
    list-style: none;
    background-color: beige;
  }

  .menu > li {
    height: 100%;
    width: 120px;
    float: left;
    border: 1px solid seashell;
  }

  .menu > li > a {
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 60px;
    display: block;
  }
</style>
```

6、在./src/components新建Page2的子组件Content1,Content2：

7、路由的过程：

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo003/preview/123.png)

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo003/preview/456.png)

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo003/preview/789.png)



在./src目录下新建目录router,加入文件index.js,该文件是路由的配置文件，如下：

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
    // 当路径为 "/" 时，在最顶层的<router-view></router-view>中渲染Home组件，
    // 当前项目App.vue中的<router-view></router-view>
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 当路径为 "/page2" 时，在最顶层的<router-view></router-view>中渲染Page2组件，
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      children: [
        // 当路径为 "/page2/content1" 时，在Page2组件的<router-view></router-view>中渲染Content1组件，
        {
          path: 'content1',
          name: 'Content1',
          component: Content1
        },
        // 当路径为 "/page2/content2" 时，在Page2组件的<router-view></router-view>中渲染Content2组件，
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

7、在main.js中配置路由

```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```

最后 npm run dev,启动项目。

9、
