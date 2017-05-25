vue-Vuex 状态管理 State 和 Getters
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo009/preview/009.gif)

1、在需要使用到state的组件， 我们都会采用import store from '../store/store' 导入 state。为了避免频繁地导入，可以在实例化
   Vue时传入store。
   
```
    import Vue from 'vue'
    import App from './App'
    //导入store
    import store from './store/store'
    import router from './router/router'
    
    // 实例化我们的Vue
    var app = new Vue({
      el: '#app',
      router,
      //传入store
      store,
      ...App,
    });
```

使用方式：this.$store.state.count;

```
    computed: {
      //监听store中count的变化
      getCount(){
        return this.$store.state.count;
      },
      //通过getters过滤监听isLogin
      isLogin(){
        return this.$store.getters.getIsLogin
      }
    },
```
2、store的定义：

```
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

```

3、提交变更

```
  div class="container">
    <h2>这是Page1.vue组件</h2>
    <button @click="changeCount()">改变store中count的值</button>
  </div>
  
  methods: {
    changeCount(){
      //提交改变状态count
      this.$store.commit("increase");
    },
  },
  
```
4、获取单个状态的变化,通过state 和 getters：

```
    computed: {
        //监听store中count的变化
        getCount(){
          return this.$store.state.count;
        },
        
        //通过getters过滤监听isLogin
        isLogin(){
          return this.$store.getters.getIsLogin
        }
    },
    
    <div class="container">
      <p>获取store中的count值count={{getCount}}</p>
      <p>获取store中的isLogin值isLogin={{isLogin}}</p>
    </div>
```

5、获取多个状态：通过mapState 和 mapGetters

```
    computed: {
      ...mapState({
        //将state中对个值映射为当前组件的computed属性
        //类似写多个computed获取值
        //相当于在computed中定义了localCount属性
        localCount: "count",
        isLogin: state => state.isLogin,

      }),
      ...mapGetters([
          "getIsLogin",
          "getCount"
        ]
      )
    },
    
    <div class="container">
      <p>通过mapState获取多个状态</p>
      <p>获取store中的count值count={{localCount}}</p>
      <p>获取store中的isLogin值isLogin={{isLogin}}</p>
    </div>
    <div class="container">
      <p>通过mapGetters获取多个状态</p>
      <p>获取store中的count值count={{localCount}}</p>
      <p>获取store中的isLogin值isLogin={{isLogin}}</p>
    </div>
```
