<template>
    <div>
        <h3>这是Page1组件</h3>
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
</style>
