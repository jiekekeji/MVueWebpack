<template>
    <div class="nav">
        这是Page2组件
        <input v-model="inputValue">
        <button @click="toParent">传值给父元素</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        methods: {
            toParent(){
                this.$emit('child-say', "123");
            }
        },
        props: {
            inputValue: ''
        },
        watch: {
            inputValue: function () {
                console.log(this.inputValue);

            }
        }
    }
</script>

<style scoped>
    .nav {
        height: 100px;
        width: 100%;
        text-align: center;
        line-height: 100px;
        background-color: antiquewhite;
    }
</style>
