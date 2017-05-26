import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        isLogin: false
    },
    mutations: {
        //无参数
        increment (state) {
            state.count++;
        },
        //有参数
        incrementByParam (state, param) {
            state.count = state.count + param;
        },
        //对象作为参数
        incrementByObj (state, obj) {
            state.count = state.count + obj.count;
            state.isLogin = obj.isLogin;
        },
    },
    actions: {
        //无参数
        increment (context) {
            context.commit("increment");
        },
        //有参数
        incrementByParam (context, param) {
            context.commit("incrementByParam", param)
        },
        //对象作为参数
        incrementByObj (context, obj) {
            context.commit("incrementByObj", obj)
        },
    }
})
export default store;