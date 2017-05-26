vue-Vuex 状态管理 小结 	
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo006/preview/006.gif)

1、store就相当于一个仓库，这个仓库里面装着特定的东西，然后还提供了一些让外界获取它里面的东西的方式和改变它里面东西的方法：

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
     //存货的格子
    state: {
        //状态属性
        count: 0,
        isLogin: false
    },
    //取的方式
    getters: {
        getIsLogin: state => {
            return state.isLogin;
        },
        getCount: state => {
            return state.count / 2;
        },
    },
    //变更格子货物的方法
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
    //变更格子货物的方法
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

2、外界如何取格子的货物：

```
 <div class="container">
    <p>监听状态变化</p>
    <p>store中count的值：{{getCount}}</p>
    <p>store中isLogin的值：{{getIsLogin}}</p>
    <p>store中count的值：{{localCount}}</p>
    <p>store中isLogin的值：{{localLogin}}</p>
    <p>store中count的值：{{getCount}}</p>
    <p>store中isLogin的值：{{getIsLogin}}</p>
 </div>
 
 computed: {
     //1、监听store中count的变化
     getCount(){
         return this.$store.state.count;
     },
     //2、通过getters过滤监听isLogin
     getIsLogin(){
         return this.$store.getters.getIsLogin
     },
     //3、mapState多computed属性映射,导入 import {mapState} from 'vuex'
     ...mapState({
         //将state中对个值映射为当前组件的computed属性
         //类似写多个computed获取值
         //相当于在computed中定义了localCount属性
         localCount: "count",
         localLogin: state => state.isLogin,

     }),
     //4、多getters的computed属性映射,对应store中的getters。导入 import {mapGetters} from 'vuex'
     ...mapGetters([
             "getIsLogin",
             "getCount"
         ]
     )
 },
```

3、外界如何变更格子货物：

方法一Mutations：

```
 <div class="container">
    <p>这是page1.vue 提交Mutations</p>
    <button @click="change(1)">无参数提交改变count</button>
    <button @click="change(2)">参数提交改变count</button>
    <button @click="change(3)">对象参数提交改变count和isLogin</button>
    <button @click="change(4)">对象风格形式的提交改变count和isLogin</button>
    <button @click="increment()">使用mapMutations形式的提交改变count</button>
 </div>
 
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
     //导入 import {mapMutations} from 'vuex'
     ...mapMutations([
         // 映射 this.increment() 为 this.$store.commit('increment')
         'increment'
     ]),
 },
    
```

方法二Mutations：

```
    <div class="container">
        <p>这是page2.vue 分发Actions</p>
        <button @click="change(1)">无参数分发改变count</button>
        <button @click="change(2)">参数分发改变count</button>
        <button @click="change(3)">对象参数分发改变count和isLogin</button>
        <button @click="change(4)">对象风格形式的分发改变count和isLogin</button>
        <button @click="increment()">使用mapActions形式的分发改变count</button>
    </div>

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
        //导入 import {mapActions} from 'vuex'
        ...mapActions([
            // 映射 this.increment() 为 this.$store.dispatch('increment')
            'increment'
        ]),
    },
```