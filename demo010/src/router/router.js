import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import Home from '../components/Home.vue'
import Page1 from  '../components/Page1.vue'
import Page2 from  '../components/Page2.vue'


Vue.use(VueRouter);

//路由映射配置
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/page1',
        component: Page1,
    },
    {
        path: '/page2',
        component: Page2,
    }
];

//创建实例
const router = new VueRouter({
    routes
});

export default router;
