import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        //无参数
        increment (state) {
            state.count++
        },
        //提交参数param
        incrementByParam (state, param) {
            state.count = state.count + param
        },
    }
})
export default store;