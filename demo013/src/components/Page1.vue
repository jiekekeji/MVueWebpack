<template>
    <div class="content">
        <div @click="openDialog">显示</div>
        <div @click="hideDialog">隐藏</div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import dialog from '../plugins/jk-dialog';
    import {toast} from '../plugins/jk-toast'
    Vue.use(dialog);

    export default{
        data(){
            return {}
        },
        components: {},
        computed: {},
        methods: {
            listtenConfire(){
                this.hide();
                toast.show('点击了确认按钮!');
            },
            listtenCancel(){
                this.hide();
                toast.show('点击了取消按钮!');
            },
            openDialog(){
                this.show("确定要关闭吗？", this.listtenConfire, this.listtenCancel);
            },
            hideDialog(){
                this.hide();
            }
        },
        created () {
        },
    }
</script>
<style scoped>
    @import "../plugins/jk-style.css";
</style>