<template>
    <div>
        <h3>这是Page2组件</h3>
        <div>
            <label>传值给父组件:</label>
            <input v-model="c32pValue">
        </div>
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
</style>