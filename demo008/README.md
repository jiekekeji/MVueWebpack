vuex

##1、创建store,

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment (state) {
            state.count++
        },
    }
})

export default store;
```
##2、通过 store.commit 方法触发状态变更或直接改变里面的值
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
            skip2Page3: function () {
                //提交mutations
                store.commit('increment');
                //或者直接改变count的值
                store.state.count++;

                console.log(store.state.count);
            }
        },
    }
```
##3、监听变更
```
    <template>
        <div class="content">
            这是page1组件 msg={{count}}
        </div>
    </template>


    import store from '../store/store';

    export default{
        data(){
            return {
            }
        },
        computed: {
            count () {
                console.log('状态值发生改变:' + store.state.count);
                return store.state.count
            }
        },
    }
```

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo006/preview/demo008.gif)