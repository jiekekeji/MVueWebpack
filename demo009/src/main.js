//导入这两个包
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router/router'

// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
