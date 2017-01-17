<template>
    <div>
        <!--2、使用组件-->
        <TopNav></TopNav>
        <MainContent></MainContent>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
    import TopNav from './components/TopNav'
    import MainContent from './components/MainContent'
    import BottomNav from './components/BottomNav'

    export default {
        name: 'app',
        //1、注册组件
        components: {
            TopNav,
            MainContent,
            BottomNav
        }
    }
</script>

<style>
    /*引入重置样式*/
    @import "assets/style/reset.css";

</style>
