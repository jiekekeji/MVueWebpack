配置组件的加载方式：懒加载和一次性加载
--------------------

1、一次性加载方式。

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo007/preview/001.gif)

2、懒加载的方式

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo007/preview/002.gif)

3、组件一次性加载方式的路由配置：

```
import Page1 from '../components/Page1.vue'
import Page2 from  '../components/Page2.vue'
import Page3 from  '../components/Page3.vue'
```

4、配置组件为懒加载的方式

```
const Page1 = resolve => require(['../components/Page1.vue'], resolve)
const Page2 = resolve => require(['../components/Page2.vue'], resolve)
const Page3 = resolve => require(['../components/Page3.vue'], resolve)
```

完整代码 ./router/index.js

```
import Vue from 'vue'
import VueRouter from 'vue-router'

//配置组件为一次性加载的方式
// import Page1 from '../components/Page1.vue'
// import Page2 from  '../components/Page2.vue'
// import Page3 from  '../components/Page3.vue'

//配置组件为懒加载的方式
const Page1 = resolve => require(['../components/Page1.vue'], resolve)
const Page2 = resolve => require(['../components/Page2.vue'], resolve)
const Page3 = resolve => require(['../components/Page3.vue'], resolve)

Vue.use(VueRouter)

//路由映射配置
const routes = [
    {
        path: '/',
        name: 'page1',
        component: Page1,
    },
    {
        path: '/page2',
        name: 'page2',
        component: Page2,
    },
    {
        path: '/page3',
        name: 'page3',
        component: Page3
    },
]
//创建实例
const router = new VueRouter({
    routes
})
export default router
```