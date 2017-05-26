<template>
    <div class="container">
        <p>这是page2.vue 分发Actions</p>
        <button @click="change(1)">无参数分发改变count</button>
        <button @click="change(2)">参数分发改变count</button>
        <button @click="change(3)">对象参数分发改变count和isLogin</button>
        <button @click="change(4)">对象风格形式的分发改变count和isLogin</button>
        <button @click="increment()">使用mapActions形式的分发改变count</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data () {
            return {}
        },
        methods: {
            change(index){
                switch (index) {
                    case 1:
                        //无参数提交
                        this.$store.dispatch('increment');
                        break;
                    case 2:
                        //参数提交
                        this.$store.dispatch('incrementByParam', 10);
                        break;
                    case 3:
                        //对象参数
                        let obj1 = {};
                        obj1.count = 15;
                        if (this.$store.state.isLogin) {
                            obj1.isLogin = false;
                        } else {
                            obj1.isLogin = true;
                        }
                        this.$store.dispatch('incrementByObj', obj1);
                        break;
                    case 4:
                        //对象风格形式的提交
                        let obj2 = {};
                        obj2.count = 15;
                        if (this.$store.state.isLogin) {
                            obj2.isLogin = false;
                        } else {
                            obj2.isLogin = true;
                        }
                        obj2.type = "incrementByObj";
                        this.$store.dispatch(obj2);
                        break;
                }
            },
            ...mapActions([
                // 映射 this.increment() 为 this.$store.dispatch('increment')
                'increment'
            ]),
        },
    }
</script>

<style scoped>
    .container {
        margin-top: 20px;
        border-top: 1px solid green;
        height: auto;
        width: 100%;
        overflow: hidden;
    }
</style>
