import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'

Vue.use(VueRouter)

//路由映射配置
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/page1',
        name: 'Page1',
        component: Page1,
        beforeEnter: ((to, from, next) => {
            console.log("==========page1路由独享钩子==========");
            console.log("//to 即将要进入的目标 路由对象")
            console.log("//from 当前导航正要离开的路由")
            console.log("to:", to);
            console.log("from:", from);
            next();
        })
    },
]

//创建实例
const router = new VueRouter({
    routes
})

//全局导航钩子

router.beforeEach((to, from, next) => {
    console.log("==========全局beforeEach==========");
    console.log("//to 即将要进入的目标 路由对象")
    console.log("//from 当前导航正要离开的路由")
    console.log("to:", to);
    console.log("from:", from);
    //next():进入到下一个钩子，next(false):终端当前导航，next('/page1')：导航到指定的路径
    next();
})

router.afterEach(route => {
    console.log("==========全局afterEach==========");
    console.log("//路由正要离开时")
})

export default router