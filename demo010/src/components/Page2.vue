<template>
    <div class="nav">
        这是Page2组件
        <button v-on:click="changePage1">改变Page1组件中msg的值,不带参数</button>
        <button v-on:click="changePage1ByPara">改变Page1组件中msg的值，带参数</button>
        <button v-on:click="changePage1ByObj">改变Page1组件中msg的值，对象风格提交</button>
        <button v-on:click="changePage1Stu">改变Page1组件中姓名和年龄</button>
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
            changePage1: function () {
                //提交mutations
                store.dispatch('aincrement');
            },
            changePage1ByPara: function () {
                //带参数的
                store.dispatch('aincrementn', 3);
            },
            changePage1ByObj: function () {
                store.dispatch({
                    type: 'aincrementobj',
                    amount: 10
                });
            },
            changePage1Stu: function () {
                store.dispatch({
                    type: 'asetStu',
                    name: 'rose',
                    age: 90
                });
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
