<template>
    <div class="footer">
        <div class="title">
            <div class="name">这是Page2组件</div>
            <router-link to="/Page3" class="nav">切换到Page3页面</router-link>
        </div>
    </div>
</template>
<style scoped>
    .title {
        position: relative;
        width: 100%;
        height: 80px;
        background-color: darkkhaki;
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
