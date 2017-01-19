<template>
    <div class="nav">
        这是Page2组件
        <button v-on:click="skip2Page3">跳转到page3</button>
    </div>
</template>

<script>
    export default {
        name: 'topnav',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当钩子执行前，组件实例还没被创建
            console.log('Page2组件内钩子:beforeRouteEnter');
            //放行next();或跳转到其他的组件next('/Page3')
            next();
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            console.log('Page2组件内钩子:beforeRouteLeave');
            //放行next();或跳转到其他的组件next('/Page3')
            next();
        },
        methods: {
            skip2Page3: function () {
                this.$router.push({path: 'Page3'});
            }
        },
    }
</script>

<style scoped>
    .nav {
        height: 100px;
        width: 100%;
        text-align: center;
        line-height: 100px;
    }
</style>
