// src/main.js
//导入这两个包
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import App from './App'
import Page1 from './components/Page1.vue'
import Page2 from  './components/Page2.vue'
import Page3 from  './components/Page3.vue'


Vue.use(VueRouter);

//路由映射配置
const routes = [{
    path: '/',
    component: Page1
}, {
    path: '/Page1',
    component: Page1,
}, {
    name: 'Page2',
    path: '/Page2',
    component: Page2,
    ///Page2 路由独享的钩子
    beforeEnter: (to, from, next) => {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建
        console.log('这是路由/Page2独享钩子:beforeEnter');
        //在进入Page2之前做了一些判断，然后定向到Page3
        next();
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('这是路由/Page2独享钩子:beforeRouteLeave');
        next();
    }
}, {
    path: '/Page3',
    component: Page3
}];

//创建实例
const router = new VueRouter({
    routes
});

//注册一个全局的 before 钩子
router.beforeEach((to, from, next) => {
    console.log('这是一个全局钩子=beforeEach');
    next();
})

// 注册一个全局的 after 钩子
router.afterEach(route => {
    console.log('这是一个全局钩子=afterEach');
})

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
    el: '#app',
    router,
    ...App,
});