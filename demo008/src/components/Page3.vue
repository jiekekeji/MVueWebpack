<template>
    <div class="container">
        <h2>这是Page3.vue组件</h2>
        <p>获取state中的值count={{scount}}</p>
        <input v-model="param" placeholder="请输入传递的参数:"/>
        <button v-on:click="changeCount">改变state中count的值:带参数</button>
    </div>
</template>
<script>
    import store from '../store/store'
    export default{
        data(){
            return {
                param: 0
            }
        },
        components: {},
        computed: {
            scount () {
                return store.state.count
            }
        },
        methods: {
            changeCount: function () {
                store.commit('incrementByParam', parseInt(this.param));
            }
        },
    }
</script>
<style scoped>
    .container {
        height: auto;
        overflow: hidden;
        background-color: lightgray;
    }

    h2 {
        background-color: lightblue;
    }
</style>