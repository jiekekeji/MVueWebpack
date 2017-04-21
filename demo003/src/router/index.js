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
