<template>
    <div class="content">
        这个Page1的子组件ch1
        <router-link to="/Page2" class="nav">切换到Page2页面</router-link>
    </div>
</template>
<style scoped>
    .content {
        width: 100%;
        height: 400px;
        line-height: 120px;
        text-align: center;
        background-color: antiquewhite;
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
