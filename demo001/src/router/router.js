import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//引入组件
import Index from "../components/Index.vue"
import Detail from "../components/Detail.vue"

//路由映射配置
const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/detail',
    component: Detail,
  }
];

//创建实例
const router = new VueRouter({
  routes
});

export default router;
