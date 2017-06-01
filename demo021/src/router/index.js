import Vue from 'vue'
import Router from 'vue-router'
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello1',
      component: Hello1
    },
    {
      path: '/hello2',
      name: 'Hello2',
      component: Hello2
    }
  ]
})
