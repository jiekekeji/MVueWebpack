<template>
    <div class="hello">

        <h3 style="background-color: darkseagreen">
            自定义指令v-imgLoad,实现在图片加载过程中显示loading,加载出错显示error样式
        </h3>

        <!--绑定v-imgLoad指令，传递参数imgDefault-->
        <img v-imgLoad="imgDefault"
             src="https://github.com/jiekekeji/MVueWebpack/blob/master/demo019/1233preview/019.gif?raw=true123"
             height="300px" width="300px"/>
        <br>


        <div style="background-color: darkseagreen">
            <router-link to="/page1">切换到Page1</router-link>
        </div>

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
