//导入这两个包
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from "./store/store"

// 实例化我们的Vue
var app = new Vue({
    el: '#app',
    router,
    store,
    ...App,
});