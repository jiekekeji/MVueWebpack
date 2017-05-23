单文件组件:
------------------------

一、实现如下图的效果:
------------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo002/preview/icon-demo002.gif)

第一种实现方式:在original目录下，
------------------------
1、新建html1.html,添加如下内容

    ```
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>html1</title>
        <link href="style/reset.css" rel="stylesheet" type="text/css"/>
        <style>
            .nav-top {
                width: 100%;
                height: auto;
                background-color: lightgray;
            }
    
            .top-menu {
                list-style: none;
                height: 60px;
                width: 1240px;
                margin: 0 auto;
            }
    
            .top-menu > li {
                text-align: center;
                line-height: 60px;
                width: 120px;
                height: 60px;
                float: left;
            }
    
            .content {
                width: 1240px;
                height: 380px;
                margin: 0 auto;
                background-color: darkgrey;
                line-height: 120px;
                text-align: center;
            }
    
            .footer {
                height: 120px;
                width: 100%;
                text-align: center;
                line-height: 120px;
                background-color: beige;
            }
        </style>
    </head>
    <body>
    <div class="nav-top">
        <ul class="top-menu">
            <li>
                <a href="#">灰色组件</a>
            </li>
            <li>
                <a href="html2.html">淡绿色组件</a>
            </li>
        </ul>
    </div>
    
    <div class="content">
        <span>主体内容组件</span>
    </div>
    
    <div class="footer">
        <span>友情链接</span>
    </div>
    </body>
    </html>
    ```

2、新建html2.html,由于顶部和底部是一样的，将html1.html拷贝出来，更改中间的部分，内容如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>html2</title>
    <link href="style/reset.css" rel="stylesheet" type="text/css"/>
    <style>
        .nav-top {
            width: 100%;
            height: auto;
            background-color: lightgray;
        }

        .top-menu {
            list-style: none;
            height: 60px;
            width: 1240px;
            margin: 0 auto;
        }

        .top-menu > li {
            text-align: center;
            line-height: 60px;
            width: 120px;
            height: 60px;
            float: left;
        }

        .content {
            width: 1240px;
            height: 380px;
            margin: 0 auto;
            background-color: darkseagreen;
            line-height: 120px;
            text-align: center;
        }

        .footer {
            height: 120px;
            width: 100%;
            text-align: center;
            line-height: 120px;
            background-color: beige;
        }
    </style>
</head>
<body>
<div class="nav-top">
    <ul class="top-menu">
        <li>
            <a href="html1.html">灰色组件</a>
        </li>
        <li>
            <a href="#">淡绿色组件</a>
        </li>
    </ul>
</div>

<div class="content">
    <span>主体内容组件</span>
</div>

<div class="footer">
    <span>友情链接</span>
</div>
</body>
</html>
```

实现完毕，出现大量冗余代码，以后需要修改头部和顶部，每个页面都要改动。


第二种实现方式：
------------------------

先划分页面结构如下:

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo002/preview/icon-demo002-2.png)

1、实现头部导航部分:在./src/components下新建文件NavTop.vue，代码编写如下：

```
<!--顶部的导航条-->
<template>
    <div class="nav-top">
        <ul class="top-menu">
            <li>
                <router-link to="/homepage/contenttopnav1">灰色组件</router-link>
            </li>
            <li>
                <router-link to="/homepage/contenttopnav2">淡绿色组件</router-link>
            </li>
        </ul>
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
    .nav-top {
        width: 100%;
        height: auto;
        background-color: lightgray;
    }

    .top-menu {
        list-style: none;
        height: 60px;
        width: 1240px;
        margin: 0 auto;
    }

    .top-menu > li {
        text-align: center;
        line-height: 60px;
        width: 120px;
        height: 60px;
        float: left;
    }
</style>

```

2、实现底部导航部分:在./src/components下新建文件NavBottom.vue，编写代码如下：

```
<template>
    <div class="footer">
        <span>友情链接</span>
    </div>
</template>

<script>
  export default{
    data(){
      return {}
    },
    components: {}
  }
</script>
<style scoped>
    .footer {
        height: 120px;
        width: 100%;
        text-align: center;
        line-height: 120px;
        background-color: beige;
    }
</style>
```

3.1、实现中间区域的灰色部分：在./src/components下新建文件ContentTopNav1.vue，编写代码如下：

```
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
```

3.2、实现中间区域的淡绿色部分：在./src/components下新建文件ContentTopNav2.vue，编写代码如下：

```
<template>
    <div class="content">
        主体内容组件


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
        background-color: darkseagreen;
        line-height: 120px;
        text-align: center;
    }
</style>
```

4、新建主页组件，将顶部、底部、中间区域部分导入，在./src/components下新建文件HomePage.vue，编写代码如下：

```
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

```

5.1、安装路由：

```
cnpm install vue-router --s
```

5.2、在./src目录下新建目录router加入router.js文件，编写代码：

```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入组件
import HomePage from '../components/HomePage.vue'
import ContentTopNav1 from '../components/ContentTopNav1.vue'
import ContentTopNav2 from '../components/ContentTopNav2.vue'

//路由映射配置
const routes = [
  {
    path: '/',
    component: HomePage,
    redirect: '/homepage/contenttopnav1'
  },
  {
    path: '/homepage',
    component: HomePage,
    redirect: '/homepage/contenttopnav1',
    children: [
      {
        path: 'contenttopnav1',
        component: ContentTopNav1,
      },
      {
        path: 'contenttopnav2',
        component: ContentTopNav2,
      },
    ]
  }
]

//创建实例
const router = new VueRouter({
  routes
})

export default router

```

5.3、在./src/App.js加入顶级路由入口，如下：

```
<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style>
    @import "assets/style/reset.css";
</style>
```

5.4、在./src/main.js加入路由配置路由，如下：

```
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
})

```

最后 npm run dev,启动项目。