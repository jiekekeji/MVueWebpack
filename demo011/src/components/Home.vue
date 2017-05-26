<template>
    <div class="container">
        <h3 style="background-color: darkseagreen">这是父组件</h3>
        <div>
            <label>传值给子组件page1:</label>
            <input v-model="p2cValue">
        </div>
        <div>
            <label>接收子组件page2的传值:</label>
            <span>{{c2pValue}}</span>
        </div>

        <div class="child">
            <!--将p2cValue的值传递给page2组件-->
            <page1 :inputValue="p2cValue"></page1>
        </div>

        <div class="child">
            <!--绑定自定义事件child-say，当child-say事件出发时执行listenChild-->
            <page2 v-on:child-say="listenChild"></page2>
        </div>

    </div>
</template>

<script>
    import page1 from '../components/Page1.vue';
    import page2 from '../components/Page2.vue';
    export default{
        data(){
            return {
                p2cValue: 0,
                c2pValue: 0,
            }
        },
        components: {
            page1,
            page2
        },
        computed: {},
        methods: {
            listenChild: function (somedata) {
                this.c2pValue = somedata;
            }
        },
        created () {
        },
    }
</script>
<style scoped>
    .container {
        height: auto;
        width: 100%;
        overflow: hidden;
        border: 2px solid black;
        padding-bottom: 30px;
    }

    .child {
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
        background-color: azure;
        border: 2px solid black;
    }
</style>