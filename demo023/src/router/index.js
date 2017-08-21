import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'

Vue.use(VueRouter)
//路由映射配置
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
];

//创建路由实例
const router = new VueRouter({
  routes
});

//导出实例
export default router
