<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
=======
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
>>>>>>> origin/master
