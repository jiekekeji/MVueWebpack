<template>
    <div class="nav">
        菜单一的内容{{userId}}
    </div>
</template>

<script>
    export default {
        name: 'topnav',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                //取值的时候是这个$route

                //1、取路由传递的参数,params的方式传值得取值方式
//                userId:this.$route.params.userId,
                //2、path的方式传递过来的取值方式
                userId: this.$route.query.userId,
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
