/**
 * Created by Administrator on 2017/1/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isLogin: false,
    count: 0,
    name: "jack"
  },
  getters: {
    getIsLogin: state => {
      return state.isLogin;
    },
    getCount: state => {
      return state.count / 2;
    },
  },
  mutations: {
    //提供一个对外改变count的函数
    increase (state) {
      state.count++;
      //这里模拟一下 根据count变更isLogin
      if (state.count % 2 == 0) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
  },
  actions: {}
})
export default store;
