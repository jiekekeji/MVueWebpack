vue-Vuex 状态管理模式初识
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo008/preview/008.gif)


实现上图的效果：
--------------------

1、安装vuex,

```
npm install vuex --save
```

2、在 ./store新建文件 store.js创建store,编辑如下：

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
        incrementByParam (state, param) {
            state.count = state.count + param
        },
    }
})
export default store;
```

3、Home.vue的主要代码：

```
<template>
    <div class="container">
        <h2>这是Home.vue组件</h2>
        <p>获取state中的值count={{scount}}</p>
        <page2></page2>
        <div style="height: 30px"></div>
        <page3></page3>
    </div>
</template>

<script>
    //引入store
    import store from '../store/store';
    import page2 from "../components/Page2.vue"
    import page3 from "../components/Page3.vue"

    export default{
        data(){
            return {}
        },
        components: {page2, page3},
        computed: {
            //通过计算属性获取store中count的值
            scount () {
                return store.state.count
            }
        },
        methods: {},
        created () {
        },
    }
</script>
```

4、Page2.vue的主要代码：

```
<template>
    <div class="container">
        <h2>这是Page2.vue组件</h2>
        <p>获取state中的值count={{scount}}</p>
        <button v-on:click="changeCount">改变state中count的值:不带参数</button>
    </div>
</template>
<script>
    import store from '../store/store'
    export default {
        data () {
            return {
            }
        },
        computed: {
            scount () {
                return store.state.count
            }
        },
        methods: {
            changeCount: function () {
                //触发状态变更
                store.commit('increment');
            }
        },
    }
</script>
```

5、Page3.vue的主要代码

```
<template>
    <div class="container">
        <h2>这是Page3.vue组件</h2>
        <p>获取state中的值count={{scount}}</p>
        <input v-model="param" placeholder="请输入传递的参数:"/>
        <button v-on:click="changeCount">改变state中count的值:带参数</button>
    </div>
</template>
<script>
    import store from '../store/store'
    export default{
        data(){
            return {
                param: 0
            }
        },
        components: {},
        computed: {
            scount () {
                return store.state.count
            }
        },
        methods: {
            changeCount: function () {
                //触发状态变更
                store.commit('incrementByParam', parseInt(this.param));
            }
        },
    }
</script>
```