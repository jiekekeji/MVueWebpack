/**
 * Created by Administrator on 2017/1/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        stu: {
            name: 'jack',
            age: 50
        }
    },
    mutations: {
        increment (state) {
            state.count++;
        },
        incrementn (state, n) {
            state.count = state.count + n
        },
        incrementobj (state, obj) {
            state.count = state.count + obj.amount
        },
        setStu(state, mstu){
            state.stu.name = mstu.name;
            state.stu.age = mstu.age;
        }
    },
    actions: {}
})


export default store;