// src/main.js
//导入这两个包
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入主见
import App from './App'
import Home from './components/Home.vue'
import Menu1 from  './components/Menu1.vue'
import Menu2 from  './components/Menu2.vue'


Vue.use(VueRouter)

//路由映射配置
const routes = [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Home
}, {
    path: '/Menu1',
    component: Menu1
}, {
    path: '/Menu2',
    component: Menu2
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