<template>
    <div class="hello">

        <h3 style="background-color: darkseagreen">
            自定义指令v-imgLoad,实现在图片加载过程中显示loading,加载出错显示error样式
        </h3>

        <img v-imgLoad="imgDefault"
             src="https://github.com/jiekekeji/MVueWebpack/raw/master/demo002/preview/icon-demo002-2.png"
             height="300px" width="300px"/>
    </div>
</template>

<script>
    import directive from "../directive/demo";
    import imgLoading from "../assets/loading.gif"
    import imgError from "../assets/error.jpg"
    export default {
        data () {
            return {
                imgDefault: {
                    error: imgError,
                    loading: imgLoading
                }
            }
        },
    }
</script>

<style scoped>
</style>
