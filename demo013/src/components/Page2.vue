<template>
    <div>
        <button @click="openDialog()">显示loading</button>
        <button @click="hideDialog()">隐藏loading</button>


        <div class="content" style="height: 800px;width: 800px">

            <!--<div class="jk-loading-container">-->
            <!--<div>-->
            <!--<div></div>-->
            <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import {loading} from '../plugins/jk-loading'

    export default{
        data(){
            return {
                loading: {},
            }
        },
        components: {},
        computed: {},
        methods: {
            openDialog(){
                this.loading = loading.show(document.getElementsByClassName("content")[0])
            },
            hideDialog(){
                loading.hide(this.loading);
            }
        },
        created () {
        },
    }
</script>
<style scoped>
    @import "../plugins/jk-loading.css";


</style>