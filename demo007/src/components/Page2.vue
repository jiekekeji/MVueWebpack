<template>
    <div class="nav">
        这是Page2组件
        <button v-on:click="skip2Page3">跳转到page3</button>
    </div>
</template>

<script>
    export default {
        name: 'topnav',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        methods: {
            skip2Page3: function () {
                this.$router.push({path: 'Page3'});
            }
        },
    }
</script>

<style scoped>
    .nav {
        height: 100px;
        width: 100%;
        text-align: center;
        line-height: 100px;
    }
</style>
