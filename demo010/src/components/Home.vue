<template>
    <div class="container">
        <div class="container">
            <p>监听状态变化</p>
            <p>store中count的值：{{getCount}}</p>
            <p>store中isLogin的值：{{getIsLogin}}</p>
        </div>
        <div class="container">
            <page1></page1>
        </div>
        <div class="container">
            <page2></page2>
        </div>
    </div>
</template>

<script>
    import page1 from "./Page1.vue"
    import page2 from "./Page2.vue"
    export default{
        data(){
            return {}
        },
        components: {page1, page2},
        computed: {
            getCount(){
                return this.$store.state.count;
            },
            getIsLogin(){
                return this.$store.state.isLogin;
            },
        },
        methods: {},
    }
</script>
<style scoped>
    .container {
        height: auto;
        width: 100%;
        overflow: hidden;
    }
</style>