理解slot，结合slot和props定义按钮组件
====
  如果说插座是一个组件，那么插座上的插槽可不可以就理解为slot呢？插槽是在插座生产的时候已经固定好位置和大小。
    
  1.0、假设现在有一个组件如下:组件内没有定义任何的插槽，
  
    <template>
        <div class="container">
            <h2>我是子组件component001,我没有插槽</h2>
        </div>
    </template>
    <script>
        export default{
            data(){
                return {}
            },
            components: {},
            computed: {},
            methods: {},
            created () {
            },
        }
    </script>
    <style scoped>
        .container {
            min-height: 80px;
            background-color: gainsboro;
            height: auto;
            margin-top: 10px;
        }
    </style>
    
  1.1、想要在父组件中往子组件插入内容(<component001></component001>)之间的内容：
  
    <template>
        <div class="content">
            <div style="margin-top: 10px;height: auto;padding: 20px;border: 1px solid gainsboro">
                <h2>子组件没有插槽，父组件插入的内容时无法看到的</h2>
                <component001>
                    <div>component001是没有插槽的,看不到我的</div>
                </component001>
            </div>
        </div>
    </template>
    <script>
        import component001 from './component001.vue'
        export default{
            data(){
                return {}
            },
            components: {
                component001,
            },
            computed: {},
            methods: {},
            created () {
            },
        }
    </script>
    <style scoped>
    </style>
  
  1.2、效果图中在父组件插入的内容并没有被渲染出来。
  
  ![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo014/preview/1.png)
    
    
    

 