<template>
    <div class="container">
        <h2>我是子组件component001,我没有插槽</h2>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        components: {},
        computed: {},
        methods: {},
        created () {
        },
    }
</script>
<style scoped>
    .container {
        min-height: 80px;
        background-color: gainsboro;
        height: auto;
        margin-top: 10px;
    }
</style>