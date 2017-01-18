<template>
    <div class="nav">
        <div class="title">
            <div class="name">这是Page3组件</div>
            <router-link to="/Page1" class="nav">切换到Page1页面</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topnav',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
    .title {
        position: relative;
        width: 100%;
        height: 80px;
        background-color: rebeccapurple;
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

</style>
