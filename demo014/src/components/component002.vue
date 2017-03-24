<template>
    <div class="container">
        <h2>我是子组件component002,我有一个插槽</h2>
        <slot>
            我是子组件的内容
        </slot>
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