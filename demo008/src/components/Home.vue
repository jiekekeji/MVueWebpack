<template>
    <div class="container">
        <h2>这是Home.vue组件</h2>
        <p>获取state中的值count={{scount}}</p>
        <page2></page2>
        <div style="height: 30px"></div>
        <page3></page3>
    </div>
</template>

<script>
    //引入store
    import store from '../store/store';
    import page2 from "../components/Page2.vue"
    import page3 from "../components/Page3.vue"

    export default{
        data(){
            return {}
        },
        components: {page2, page3},
        computed: {
            //通过计算属性获取store中count的值
            scount () {
                return store.state.count
            }
        },
        methods: {},
        created () {
        },
    }
</script>
<style scoped>
    .container {
        width: 100%;
        height: auto;
        overflow: hidden;
        padding-bottom: 50px;
    }

    h2 {
        background-color: beige;
    }
</style>