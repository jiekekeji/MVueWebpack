<template>
    <div>
        <h4 class="title">这是主页</h4>
        <p class="nav-page">
            <router-link to="/page1">到Page1页面</router-link>
        </p>
        <div>
            <span ref="span">input的值:{{message}}</span>
            <input v-model="message"/>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                message: "init",
                vdom: {}
            }
        },
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

//        //组件内钩子
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
    }
</script>

<style scoped>
    .title {
        height: 60px;
        line-height: 60px;
        text-indent: 10px;
        background-color: darkseagreen;
    }

    .nav-page {
        line-height: 60px;
        height: 60px;
        width: 180px;
        text-align: center;
        background-color: burlywood;
    }
</style>
