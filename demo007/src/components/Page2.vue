<template>
    <div class="container">
        <h2>这是page2</h2>
        <button v-on:click="skip2Page3">跳转到page3</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        methods: {
            skip2Page3: function () {
                this.$router.push({path: '/page3'});
            }
        },
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: auto;
    }

    h2 {
        background-color: blanchedalmond;
    }
</style>
