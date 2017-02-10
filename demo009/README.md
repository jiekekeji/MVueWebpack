<<<<<<< HEAD
# demo009

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
=======
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
        //无参数
        increment (state) {
            state.count++;
        },
        //参数方式
        incrementn (state, n) {
            state.count = state.count + n
        },
        //对象方式
        incrementobj (state, obj) {
            state.count = state.count + obj.amount
        },
        //对象方式
        setStu(state, mstu){
            state.stu.name = mstu.name;
            state.stu.age = mstu.age;
        }
    },
    actions: {}
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
                store.commit('increment');
            },
            changePage1ByPara: function () {
                //带参数的
                store.commit('incrementn', 3);
            },
            changePage1ByObj: function () {
                store.commit({
                    type: 'incrementobj',
                    amount: 10
                });
            },
            changePage1Stu: function () {
                store.commit({
                    type: 'setStu',
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
>>>>>>> origin/master
