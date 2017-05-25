<template>
    <div class="container">
        <h2>这是page3</h2>
        <router-link to="/">跳转到page1</router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        components: {}
    }
</script>
<style scoped>
    .container {
        width: 100%;
        height: auto;
    }

    h2 {
        background-color: lightblue;
    }
</style>