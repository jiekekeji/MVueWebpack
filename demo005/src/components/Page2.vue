<template>
    <div class="container">
        <p>1、取声明式导航的传值：msg1={{msg1}}</p>
        <p>2、编程式导航(按路由的命名)的传值：msg2={{msg2}}</p>
        <p>3、编程式导航(按路由的路径)的传值：msg3={{msg3}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg1: this.$route.query.msg1,
                //注意这里使用的是params,和msg1的query不同
                msg2: this.$route.params.msg2,
                msg3: this.$route.query.msg3
            }
        },
    }
</script>
<style scoped>
    .container {
        height: auto;
        width: auto;
        overflow: hidden;
    }

    p {
        background-color: darkseagreen;
    }
</style>