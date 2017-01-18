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
    import VueRouter from 'vue-router'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {},
        methods: {
            skip2Page2:function () {
                console.log(this.$router);
                this.$router.push({ name: 'Page2'})
            }
        }
    }
</script>
