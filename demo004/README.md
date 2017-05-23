vue-组件生命周期和路由的钩子函数:
--------------------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo004/preview/life-cycle.png)

一、组件生命周期函数
------------------------------

1、在Home.vue添加生命周期函数如下：
```
   beforeCreate(){
       console.log("==========beforeCreate==========");
       console.log("//data和el都是undefined。在beforeCreate钩子函数中不能使用data中的数据，也不能获得DOM节点")
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
   },
   created(){
       console.log("==========created==========");
       console.log("//能读取到data,dom还没生成")
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
   },
   beforeMount(){
       console.log("==========beforeMount==========");
       console.log("//在挂载开始之前被调用,dom还没生成");
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
   },
   mounted(){
       console.log("==========mounted==========");
       console.log("//将vm.$el挂在到元素el后 调用，data,dom生成");
       console.log("//使用 <keep-alive></keep-alive>组件激活时，切换组件时只会调用一次");
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
   },
   beforeUpdate(){
       console.log("==========beforeUpdate==========");
       console.log("//数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前,vnode更新之前的值")
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
       console.log("vnode", this.$refs.span.innerHTML);
   },
   updated(){
       console.log("==========updated==========");
       console.log("//数据更改导致的虚拟 DOM 重新渲染和打补丁之后，,vnode更新之后的值")
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
       console.log("vnode", this.$refs.span.innerHTML);
   },
   activated(){
       console.log("==========activated==========");
       console.log("//使用 <keep-alive></keep-alive>组件激活时才会调用，每次组件可见时都会再次调用");
       console.log("//如这里 在App.vue加入：<keep-alive> <router-view></router-view> </keep-alive>")
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
   },
   deactivated(){
       console.log("==========deactivated==========");
       console.log("===使用 <keep-alive></keep-alive>组件激活时才会调用===");
       console.log("===如这里 在App.vue加入：<keep-alive> <router-view></router-view> </keep-alive> ===")
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
   },
   beforeDestory(){
       console.log("==========beforeDestory==========");
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
   },
   destory(){
       console.log("==========destory==========");
       console.log("this.$el", this.$el);
       console.log("this.$data", this.$data);
       console.log("this.message", this.message);
   },

```

2、打印的日志：

```
Home.vue?d0e8:26 ==========beforeCreate==========
Home.vue?d0e8:27 //data和el都是undefined。在beforeCreate钩子函数中不能使用data中的数据，也不能获得DOM节点
Home.vue?d0e8:28 this.$el undefined
Home.vue?d0e8:29 this.$data undefined
Home.vue?d0e8:30 this.message undefined
Home.vue?d0e8:33 ==========created==========
Home.vue?d0e8:34 //能读取到data,dom还没生成
Home.vue?d0e8:35 this.$el undefined
Home.vue?d0e8:36 this.$data Object {__ob__: Observer}
Home.vue?d0e8:37 this.message init
Home.vue?d0e8:40 ==========beforeMount==========
Home.vue?d0e8:41 //在挂载开始之前被调用,dom还没生成
Home.vue?d0e8:42 this.$el undefined
Home.vue?d0e8:43 this.$data Object {__ob__: Observer}
Home.vue?d0e8:44 this.message init
Home.vue?d0e8:47 ==========mounted==========
Home.vue?d0e8:48 //将vm.$el挂在到元素el后 调用，data,dom生成
Home.vue?d0e8:49 this.$el <div data-v-34d534f1>​…​</div>​
Home.vue?d0e8:50 this.$data Object {__ob__: Observer}
Home.vue?d0e8:51 this.message init
Home.vue?d0e8:70 ==========activated==========
Home.vue?d0e8:71 //使用 <keep-alive></keep-alive>组件激活时才会调用
Home.vue?d0e8:72 //如这里 在App.vue加入：<keep-alive> <router-view></router-view> </keep-alive>
Home.vue?d0e8:73 this.$el <div data-v-34d534f1>​…​</div>​
Home.vue?d0e8:74 this.$data Object {__ob__: Observer}
Home.vue?d0e8:75 this.message init
```

二、路由的钩子
------------------------------

1、全局钩子，都每次路由切换时都会调用。在router/index.js中添加代码：

```
router.beforeEach((to, from, next) => {
    console.log("==========全局beforeEach==========");
    console.log("to:即将要进入的目标 路由对象", to);
    console.log("from:当前导航正要离开的路由", from);
    console.log("next", next);
    //next():进入到下一个钩子，next(false):终端当前导航，next('/page1')：导航到指定的路径
    next();
})

router.afterEach(route => {
    console.log("==========全局afterEach==========");
})
```

2、组件内路由钩子，在components/Home.vue中加入：

```
    beforeRouteEnter (to, from, next) {
        console.log("==========组件内钩子:beforeRouteEnter 进入该组件之前调用==========")
        console.log("//to 即将要进入的目标 路由对象")
        console.log("//from 当前导航正要离开的路由")
        console.log("to:", to);
        console.log("from:", from);
        next();
    },

    beforeRouteLeave (to, from, next) {
        console.log("==========组件内钩子:beforeRouteLeave 导航离开该组件的对应路由时调用==========")
        console.log("//to 即将要进入的目标 路由对象")
        console.log("//from 当前导航正要离开的路由")
        console.log("to:", to);
        console.log("from:", from);
        next();
    }
```

另一种方式：在路由配置文件router/index.js中添加代码：
```
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/page1',
        name: 'Page1',
        component: Page1,
        beforeEnter: ((to, from, next) => {
            console.log("==========page1路由独享钩子==========");
            console.log("//to 即将要进入的目标 路由对象")
            console.log("//from 当前导航正要离开的路由")
            console.log("to:", to);
            console.log("from:", from);
            next();
        })
    },
]
```