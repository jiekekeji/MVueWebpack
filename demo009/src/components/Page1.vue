<template>
    <div class="content">
        这是page1组件 msg={{listenCount}}
        <p>名字：{{stu.name}} 年龄:{{stu.age}}</p>
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
                msg: store.state.count,
                stu: store.state.stu,
            }
        },
        components: {},
        computed: {
            listenCount () {
                console.log('状态值发生改变:' + store.state.count);
                return store.state.count
            },
        },
        methods: {
            skip2Page2: function () {
                this.$router.push({path: 'Page2'});
            }
        },
        created () {
        },
    }
</script>
