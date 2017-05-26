父子组件之间的传值
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo011/preview/011.gif)

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo011/preview/011-1.gif)

一、父组件传递给子组件

1、子组件代码：
 
```
    export default {
        data () {
            return {}
        },
        methods: {},
        props: {
            inputValue: ''
        },
        watch: {}
    }
```

2、父组件代码：

```
    data(){
        return {
            p2cValue: 0,
        }
    },

    <page1 :inputValue="p2cValue"></page1>
```

完整父组件代码：

```
<template>
    <div class="container">
        <h3 style="background-color: darkseagreen">这是父组件</h3>
        <div>
            <label>传值给子组件page1:</label>
            <input v-model="p2cValue">
        </div>

        <div class="child">
            <!--将p2cValue的值传递给page2组件-->
            <page1 :inputValue="p2cValue"></page1>
        </div>
    </div>
</template>

<script>
    import page1 from '../components/Page1.vue';
    import page2 from '../components/Page2.vue';
    export default{
        data(){
            return {
                p2cValue: 0,
            }
        },
        components: {
            page1,
        },
        methods: {},
    }
</script>
```
  
二、子组件传递给父组件

1、父组件代码：

```
   !--绑定自定义事件child-say，当child-say事件出发时执行listenChild-->
   <page2 v-on:child-say="listenChild"></page2>
   
   methods: {
        //可携带参数
       listenChild: function (somedata) {
           this.c2pValue = somedata;
       }
   },
```

完整父组件代码：

```
<template>
    <div class="container">
        <h3 style="background-color: darkseagreen">这是父组件</h3>
        <div>
            <label>接收子组件page2的传值:</label>
            <span>{{c2pValue}}</span>
        </div>

        <div class="child">
            <!--绑定自定义事件child-say，当child-say事件出发时执行listenChild-->
            <page2 v-on:child-say="listenChild"></page2>
        </div>

    </div>
</template>

<script>
    import page1 from '../components/Page1.vue';
    import page2 from '../components/Page2.vue';
    export default{
        data(){
            return {
                c2pValue: 0,
            }
        },
        components: {
            page2
        },
        computed: {},
        methods: {
            listenChild: function (somedata) {
                this.c2pValue = somedata;
            }
        },
        created () {
        },
    }
</script>
```

2、子组件触发父组件listenChild调用的方式：

```
this.$emit('child-say', data);
```

完成子组件代码

```
<template>
    <div>
        <h3>这是Page2组件</h3>
        <div>
            <label>传值给父组件:</label>
            <input v-model="c32pValue">
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                c32pValue: 0,
            }
        },
        components: {},
        methods: {
            toParent(data){
                this.$emit('child-say', data);
            }
        },
        watch: {
            //c32pValue变化立马触发this.$emit('child-say', data);
            'c32pValue': function () {
                this.toParent(this.c32pValue);
            }
        }
    }
</script>
```