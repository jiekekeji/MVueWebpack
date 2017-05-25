<template>
    <div class="container">
        <h2>这是page1</h2>
        <router-link to="/page2">跳转到page2</router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        components: {},
        methods: {},
        created () {
        },
    }
</script>
<style scoped>
    .container {
        width: 100%;
        height: auto;
    }

    h2 {
        background-color: darkseagreen;
    }
</style>