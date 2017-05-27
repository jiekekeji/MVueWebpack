<template>
    <div>
        <div class="item-container" v-for="item in spileCitys">
            <div class="item" v-for="child in item">{{child}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                citys: ['法国', '澳大利亚', '智利', '新西兰', '西班牙', '加拿大', '波多黎各', '英国'],
            }
        },
        computed: {
            spileCitys(){
                var result = [];
                for (var i = 0, len = this.citys.length; i < len; i += 3) {
                    result.push(this.citys.slice(i, i + 3));
                }
                return result;
            }
        },
        methods: {},
        props: {},
        watch: {}
    }
</script>
<style scoped="">
    .item-container {
        height: 160px;
        width: 980px;
        margin: 0 auto;
        margin-top: 20px;
        background-color: lightgreen;
    }

    .item {
        display: inline-block;
        height: 160px;
        width: 300px;
        margin-left: 18px;
        background-color: darkseagreen;
    }
</style>
