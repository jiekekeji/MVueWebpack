<template>
    <div id="app">
        <!--路由出口-->
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        //1、注册组件
        components: {}
    }


</script>

<style>
    /*引入重置样式*/
    @import "assets/style/reset.css";

    .menu {
        height: 120px;
        width: 100%;
        background-color: rosybrown;

    }

    .menu > a {
        display: inline-block;
        height: 120px;
        width: 120px;
        text-align: center;
        line-height: 120px;
        border-right: 1px solid gray;
    }

</style>
