<template>
    <div class="content">
        这是page1
        <button v-on:click="skip2Page2">跳转到page2并携带参数</button>
    </div>
</template>
<style scoped>
    .content {
        width: 100%;
        height: 600px;
        margin: 0 auto;
        line-height: 120px;
        text-align: center;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {},
        methods: {
            skip2Page2: function () {
                //注意 这里是$router不是$route，搞了大半天

                //1、直接跳转到Page2
//                this.$router.push('Page2');
                //2、按照路由的Path带参数跳转到Page2
                this.$router.push({path: 'Page2', query: {userId: 123456}});
                //3、按照路由的命名跳转
//                this.$router.push({name: 'Page2', params: {userId: 123}});
            }
        },
    }
</script>
