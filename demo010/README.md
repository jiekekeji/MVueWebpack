vue-Vuex 状态管理 Mutations 和 Actions 	
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo009/preview/demo009.gif)

1、./store/store.js的配置

```
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
```

2、在Vue实例化时注入store,main.js:

```
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from "./store/store"

// 实例化我们的Vue
var app = new Vue({
    el: '#app',
    router,
    store,
    ...App,
});
```

3、获取/监听store状态的变更：

```
   <div class="container">
        <p>监听状态变化</p>
        <p>store中count的值：{{getCount}}</p>
        <p>store中isLogin的值：{{getIsLogin}}</p>
   </div>

    export default{
        data(){
            return {}
        },
        components: {page1, page2},
        computed: {
            getCount(){
                return this.$store.state.count;
            },
            getIsLogin(){
                return this.$store.state.isLogin;
            },
        },
        methods: {},
    }
```

4.1、提交状态变更方式一:Mutations

```
    <button @click="change(1)">无参数提交改变count</button>
    <button @click="change(2)">参数提交改变count</button>
    <button @click="change(3)">对象参数提交改变count和isLogin</button>
    <button @click="change(4)">对象风格形式的提交改变count和isLogin</button>
    <button @click="increment()">使用mapMutations形式的提交改变count</button>
    
    methods: {
        change(index){
            switch (index) {
                case 1:
                    //无参数提交
                    this.$store.commit('increment');
                    break;
                case 2:
                    //参数提交
                    this.$store.commit('incrementByParam', 10);
                    break;
                case 3:
                    //对象参数
                    let obj1 = {};
                    obj1.count = 15;
                    if (this.$store.state.isLogin) {
                        obj1.isLogin = false;
                    } else {
                        obj1.isLogin = true;
                    }
                    this.$store.commit('incrementByObj', obj1);
                    break;
                case 4:
                    //对象风格形式的提交
                    let obj2 = {};
                    obj2.count = 15;
                    if (this.$store.state.isLogin) {
                        obj2.isLogin = false;
                    } else {
                        obj2.isLogin = true;
                    }
                    obj2.type = "incrementByObj";
                    this.$store.commit(obj2);
                    break;
            }
        },
        ...mapMutations([
            // 映射 this.increment() 为 this.$store.commit('increment')
            'increment'
        ]),
    },
```

4.2、提交状态变更方式一:Actions

```
    <button @click="change(1)">无参数分发改变count</button>
    <button @click="change(2)">参数分发改变count</button>
    <button @click="change(3)">对象参数分发改变count和isLogin</button>
    <button @click="change(4)">对象风格形式的分发改变count和isLogin</button>
    <button @click="increment()">使用mapMutations形式的分发改变count</button>
    
    
    methods: {
        change(index){
            switch (index) {
                case 1:
                    //无参数提交
                    this.$store.dispatch('increment');
                    break;
                case 2:
                    //参数提交
                    this.$store.dispatch('incrementByParam', 10);
                    break;
                case 3:
                    //对象参数
                    let obj1 = {};
                    obj1.count = 15;
                    if (this.$store.state.isLogin) {
                        obj1.isLogin = false;
                    } else {
                        obj1.isLogin = true;
                    }
                    this.$store.dispatch('incrementByObj', obj1);
                    break;
                case 4:
                    //对象风格形式的提交
                    let obj2 = {};
                    obj2.count = 15;
                    if (this.$store.state.isLogin) {
                        obj2.isLogin = false;
                    } else {
                        obj2.isLogin = true;
                    }
                    obj2.type = "incrementByObj";
                    this.$store.dispatch(obj2);
                    break;
            }
        },
        ...mapActions([
            // 映射 this.increment() 为 this.$store.dispatch('increment')
            'increment'
        ]),
    },
```