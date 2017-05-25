<template>
    <div class="container">
        <h2>这是Page2.vue组件</h2>
        <p>获取state中的值count={{scount}}</p>
        <button v-on:click="changeCount">改变state中count的值:不带参数</button>
    </div>
</template>
<script>
    import store from '../store/store'
    export default {
        data () {
            return {
            }
        },
        computed: {
            scount () {
                return store.state.count
            }
        },
        methods: {
            changeCount: function () {
                store.commit('increment');
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
