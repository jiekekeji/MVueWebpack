/**
 * Created by Administrator on 2017/1/20.
 */

/**
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import Page1 from '../components/Page1.vue'
import Page2 from  '../components/Page2.vue'


Vue.use(VueRouter);

//路由映射配置
const routes = [
    {
        path: '/',
        component: Page1
    },
    {
        path: '/page1',
        component: Page1,
    },
    {
        name: 'Page2',
        path: '/page2',
        component: Page2,
    }
];

//创建实例
const router = new VueRouter({
    routes
});

export default router;
