<template>
    <div class="content">
        这是Page1组件
        <input v-model="inputValue">
        <page2 :inputValue="inputValue" v-on:child-say="listenToMyBoy"></page2>
    </div>
</template>
<style scoped>
    .content {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        line-height: 120px;
        text-align: center;
        background-color: azure;
    }
</style>
<script>
    import page2 from '../components/Page2.vue';

    export default{
        data(){
            return {
                inputValue: 2
            }
        },
        components: {
            page2,
        },
        computed: {},
        methods: {
            listenToMyBoy: function (somedata) {
                console.log("父元素:" + somedata);
            }
        },
        created () {
        },
    }
</script>
