// src/main.js
import Vue from 'vue'
import App from './App'
import router from './router/router'

// 实例化我们的Vue
var app = new Vue({
    el: '#app',
    router,
    ...App,
});