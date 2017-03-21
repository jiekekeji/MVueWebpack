<template>
    <div class="content">
        <h1 style="height: 50px;line-height: 50px;text-indent: 30px">父组件:</h1>
        <div style="height: 60px"><label>传值给子组件page2:</label><input v-model="p2cValue"></div>
        <div style="height: 60px"><label>接收子组件page3的传值:</label>{{c2pValue}}</div>
        <!--将p2cValue的值传递给page2组件-->
        <page2 :inputValue="p2cValue"></page2>
        <!--绑定自定义事件child-say，当child-say事件出发时执行listenChild-->
        <page3 v-on:child-say="listenChild"></page3>
    </div>
</template>
<style scoped>
    .content {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: azure;
        text-align: center;
    }
</style>
<script>
    import page2 from '../components/Page2.vue';
    import page3 from '../components/Page3.vue';
    export default{
        data(){
            return {
                p2cValue: 0,
                c2pValue: 0,
            }
        },
        components: {
            page2,
            page3
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
