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
