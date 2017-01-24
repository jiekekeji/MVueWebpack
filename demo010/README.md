##Mutations:

##1、创建store,

```
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
```
##2、通过 store.commit 方法触发状态变更
```
    import store from '../store/store'
        export default {
            name: 'topnav',
            data () {
                return {
                    msg: 'Welcome to Your Vue.js App',
                }
            },
            methods: {
                changePage1: function () {
                    //提交mutations
                    store.dispatch('aincrement');
                },
                changePage1ByPara: function () {
                    //带参数的
                    store.dispatch('aincrementn', 3);
                },
                changePage1ByObj: function () {
                    store.dispatch({
                        type: 'aincrementobj',
                        amount: 10
                    });
                },
                changePage1Stu: function () {
                    store.dispatch({
                        type: 'asetStu',
                        name: 'rose',
                        age: 90
                    });
                }
            },
        }
```
##3、监听变更
```
    <template>
        <div class="content">
            这是page1组件 msg={{listenCount}}
            <p>名字：{{stu.name}} 年龄:{{stu.age}}</p>
        </div>
    </template>
    <script>
        import store from '../store/store';
    
        export default{
            data(){
                return {
                    msg: store.state.count,
                    stu: store.state.stu,
                }
            },
            components: {},
            computed: {
                listenCount () {
                    console.log('状态值发生改变:' + store.state.count);
                    return store.state.count
                },
            },
            methods: {
                skip2Page2: function () {
                    this.$router.push({path: 'Page2'});
                }
            },
            created () {
            },
        }
    </script>
```

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo009/preview/demo009.gif)