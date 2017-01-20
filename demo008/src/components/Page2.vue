<template>
    <div class="nav">
        这是Page2组件
        <button v-on:click="skip2Page3">改变Page1组件中msg的值</button>
    </div>
</template>

<script>
    import store from '../store/store'
    export default {
        name: 'topnav',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        methods: {
            skip2Page3: function () {
                store.commit('increment');
                console.log(store.state.count);
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
        background-color: antiquewhite;
    }
</style>
