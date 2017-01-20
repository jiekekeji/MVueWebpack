<template>
    <div class="content">
        这是page1
        <button v-on:click="skip2Page2">跳转到page2</button>
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
    import $ from 'jquery';

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {},
        methods: {
            skip2Page2: function () {
                this.$router.push({path: 'Page2'});
            }
        },
        created () {
            console.log($);
        },
    }
</script>
