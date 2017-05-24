import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'

Vue.use(VueRouter)

//路由映射配置
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/page1',
        name: 'page1',
        component: Page1,
    },
    {
        path: '/page2',
        name: 'page2',
        component: Page2,
    },
    {
        path: '/page3',
        name: 'page3',
        component: Page3
    },
]

//创建实例
const router = new VueRouter({
    routes
})

export default router