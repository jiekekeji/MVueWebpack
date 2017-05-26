<template>
    <div class="container">
        <div class="container">
            <p>监听状态变化</p>
            <p>store中count的值：{{getCount}}</p>
            <p>store中isLogin的值：{{getIsLogin}}</p>
            <p>store中count的值：{{localCount}}</p>
            <p>store中isLogin的值：{{localLogin}}</p>
            <p>store中count的值：{{getCount}}</p>
            <p>store中isLogin的值：{{getIsLogin}}</p>
        </div>
        <div class="container">
            <page1></page1>
        </div>
        <div class="container">
            <page2></page2>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapState} from 'vuex'
    import page1 from "./Page1.vue"
    import page2 from "./Page2.vue"
    export default{
        data(){
            return {}
        },
        components: {page1, page2},
        computed: {
            //1、监听store中count的变化
            getCount(){
                return this.$store.state.count;
            },
            //2、通过getters过滤监听isLogin
            getIsLogin(){
                return this.$store.getters.getIsLogin
            },
            //3、mapState多computed属性映射
            ...mapState({
                //将state中对个值映射为当前组件的computed属性
                //类似写多个computed获取值
                //相当于在computed中定义了localCount属性
                localCount: "count",
                localLogin: state => state.isLogin,

            }),
            //4、多getters的computed属性映射,对应store中的getters
            ...mapGetters([
                    "getIsLogin",
                    "getCount"
                ]
            )
        },
        methods: {},
    }
</script>
<style scoped>
    .container {
        height: auto;
        width: 100%;
        overflow: hidden;
    }
</style>