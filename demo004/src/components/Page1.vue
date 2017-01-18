<template>
    <div class="content">
        <div class="title">
            <div class="name">这是Page1组件</div>
            <router-link to="/Page2" class="nav">切换到Page2页面</router-link>
        </div>

        <div class="page1-nav">
            <router-link to="/Page1/Page1Ch1">Page1组件Page1Ch1</router-link>
            <router-link to="/Page1/Page1Ch2">Page1组件Page1Ch2</router-link>
        </div>
        <!--子路由出口-->
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .content {
        /*display: table;*/
    }

    .title {
        position: relative;
        width: 100%;
        height: 80px;
        background-color: darkseagreen;
    }

    .title > .name {
        height: 80px;
        display: inline-block;
        text-align: center;
        line-height: 80px;
        font-size: 28px;
    }

    .title > .nav {
        right: 10px;
        position: absolute;
        display: inline-block;
        float: right;
        text-align: center;
        line-height: 80px;
        font-size: 28px;
        height: 80px;
    }

    .page1-nav {
        width: 100%;
        height: 80px;
        background-color: gainsboro;
    }

    .page1-nav > a {
        width: 49%;
        height: 80px;
        display: inline-block;
        text-align: center;
        line-height: 80px;
    }

    .page1-nav > a:hover {
        background-color: rosybrown;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
