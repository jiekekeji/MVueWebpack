<template>
    <div class="container">
        <h2>我是子组件component003,具名插槽</h2>
        <div class="cheader">
            <slot name="header">
                <h2>子组件默认标题</h2>
            </slot>
        </div>
        <div class="cmain">
            <slot name="main">
                <h2>子组件默认内容</h2>
            </slot>
        </div>
        <div class="cfooter">
            <slot name="footer">
                <h2>子组件默认底部</h2>
            </slot>
        </div>
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

    .cheader {
        height: 30px;
        background-color: olivedrab;
    }

    .cmain {
        min-height: 80px;
        height: auto;
        background-color: aquamarine;
    }

    .cfooter {
        height: 30px;
        background-color: aliceblue;
    }
</style>