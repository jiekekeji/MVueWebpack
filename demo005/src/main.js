// src/main.js
//导入这两个包
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import App from './App'
import Page1 from './components/Page1.vue'
import Page2 from  './components/Page2.vue'
import Page3 from  './components/Page3.vue'


Vue.use(VueRouter)

//路由映射配置
const routes = [{
    path: '/',
    component: Page1
}, {
    path: '/Page1',
    component: Page1
}, {
    name: 'Page2',
    path: '/Page2',
    component: Page2
}, {
    path: '/Page3',
    component: Page3
}];

//创建实例
const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
    el: '#app',
    router,
    ...App,
});