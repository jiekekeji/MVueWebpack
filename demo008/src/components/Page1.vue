<template>
    <div class="content">
        这是page1 msg={{msg}}
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
    import store from '../store/store';

    export default{
        data(){
            return {
                msg: store.state.count
        }
        },
        components: {},
        methods: {
            skip2Page2: function () {
                this.$router.push({path: 'Page2'});
            }
        },
        created () {
        },
    }
</script>
