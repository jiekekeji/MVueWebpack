<template>
    <div class="nav">
        <h1>这是Page2组件</h1>
        <div><label>接收父组件的传值:</label>{{inputValue}}</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        methods: {},
        props: {
            inputValue: ''
        },
        watch: {}
    }
</script>

<style scoped>
    .nav {
        height: 100px;
        width: 100%;
        text-align: center;
        line-height: 50px;
        background-color: antiquewhite;
    }
</style>
