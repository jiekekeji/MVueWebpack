<template>
    <div class="content">

        <div style="margin-top: 10px;height: auto;padding: 20px;border: 1px solid gainsboro">
            <h2>子组件没有插槽，父组件插入的内容时无法看到的</h2>
            <component001>
                <div>component001是没有插槽的,看不到我的</div>
            </component001>
        </div>

        <div style="margin-top: 10px;height: auto;padding: 20px;border: 1px solid gainsboro">
            <h2>子组件有插槽，父组件插入了内容，子组件默认插槽内容被替换</h2>
            <component002>
                <div>我是父组件插入的内容</div>
            </component002>
        </div>

        <div style="margin-top: 10px;height: auto;padding: 20px;border: 1px solid gainsboro">
            <h2>子组件有插槽，父组件没有插入内容，显示子组件默认内容</h2>
            <component002></component002>
        </div>

        <!--试试不插入任何内容-->
        <div style="margin-top: 10px;height: auto;padding: 20px;border: 1px solid gainsboro">
            <h2>具名插槽:父组件不插入任何内容</h2>
            <component003></component003>
        </div>

        <!--插入内容-->
        <div style="margin-top: 10px;height: auto;padding: 20px;border: 1px solid gainsboro">
            <h2>具名插槽:父组件按插槽名插入内容</h2>
            <component003>
                <h2 slot="header">我是父组件插入的标题</h2>
                <div slot="main">我是父组件插入的内容</div>
                <div slot="footer">我是父组件插入的底部</div>
            </component003>
        </div>


        <div style="margin-top: 10px;height: auto;padding: 20px;border: 1px solid gainsboro">
            <h2>结合slot和props:做一个自定义按钮组件的例子:</h2>
            <mybutton type="success">成功类型按钮</mybutton>
            <mybutton type="warning">警告类型按钮</mybutton>
            <mybutton type="error">错误类型按钮</mybutton>
            <mybutton></mybutton>
        </div>

    </div>
</template>

<script>
    import component001 from './component001.vue'
    import component002 from './component002.vue'
    import component003 from './component003.vue'
    import mybutton from './mybutton.vue'

    export default{
        data(){
            return {}
        },
        components: {
            component001,
            component002,
            component003,
            mybutton
        },
        computed: {},
        methods: {},
        created () {
        },
    }
</script>
<style scoped>
</style>