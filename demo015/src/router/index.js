import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
  ],
  // 默认为hash模式
  // mode: 'history',
})
