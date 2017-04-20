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
