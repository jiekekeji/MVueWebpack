<template>
    <div class="content">
        这个Page1的子组件ch1

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
