<template>
    <div class="footer">
        这是Page3
        <div><label>传值给父组件:</label><input v-model="c32pValue"></div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                c32pValue: 0,
            }
        },
        components: {},
        methods: {
            toParent(data){
                this.$emit('child-say', data);
            }
        },
        watch: {
            'c32pValue': function () {
                this.toParent(this.c32pValue);
            }
        }
    }
</script>
<style scoped>
    .footer {
        height: 120px;
        width: 100%;
        text-align: center;
        line-height: 50px;
        background-color: darkseagreen;
    }
</style>