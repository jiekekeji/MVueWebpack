// src/main.js
//导入这两个包
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router/router'

// 实例化我们的Vue
var app = new Vue({
    el: '#app',
    router,
    ...App,
});