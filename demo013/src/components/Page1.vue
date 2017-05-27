<template>
    <div class="content">

    </div>
</template>

<script>
    import Vue from 'vue'
    import loading from '../plugins/jk-loading';
    Vue.use(loading);

    export default{
        data(){
            return {}
        },
        components: {},
        computed: {},
        methods: {},
        created(){
            console.log("loading");
            console.log(this.$loading())
        }
    }
</script>
<style scoped>
    @import "../plugins/jk-loading.css";
</style>