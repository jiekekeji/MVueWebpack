/**
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import Home from '../components/Home.vue'
import Page2 from  '../components/Page2.vue'
import Page3 from  '../components/Page3.vue'


Vue.use(VueRouter);

//路由映射配置
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        name: 'Page2',
        path: '/Page2',
        component: Page2,
    },
    {
        path: '/Page3',
        component: Page3
    }
];

//创建实例
const router = new VueRouter({
    routes
});

export default router;
