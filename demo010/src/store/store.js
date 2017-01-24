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
    actions: {
        aincrement (context) {
            console.log('actions=aincrement');
            //可执行异步操作
            setTimeout(function () {
                //提交到mutations
                context.commit('increment');
            }, 1000 * 2)

        },
        aincrementn (context, n) {
            context.commit('incrementn', 3);
        },
        aincrementobj (context, obj) {
            context.commit({
                type: 'incrementobj',
                amount: 10
            });
        },
        asetStu(context, mstu){
            context.commit({
                type: 'setStu',
                name: 'rose',
                age: 90
            });
        }
    }
})


export default store;