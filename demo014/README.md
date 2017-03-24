理解slot，结合slot和props定义按钮组件
====
  如果说插座是一个组件，那么插座上的插槽可不可以就理解为slot呢？插槽是在插座生产的时候已经固定好位置和大小。
    
  1.0、假设现在有一个组件如下:组件内没有使用slot定义任何的插槽，
  
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
    
  1.1、想要在父组件中往子组件插入内容component001标签之间的内容：
  
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
  
  1.2、效果图中在父组件插入的内容并没有被渲染出来。子组件没有定义插槽，外部无法往子组件内插入内容。
  
  ![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo014/preview/1.png)
  
  2.0、在组件内使用slot定义好插槽
  
    <template>
        <div class="container">
            <h2>我是子组件component002,我有一个插槽</h2>
            <slot>
                我是子组件的内容
            </slot>
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
   
  2.1、在父组件中往子组件插入内容component002标签之间的内容：
    <template>
        <div class="content">
            <div style="margin-top: 10px;height: auto;padding: 20px;border: 1px solid gainsboro">
                <h2>子组件有插槽，父组件插入了内容，子组件默认插槽内容被替换</h2>
                <component002>
                    <div>我是父组件插入的内容</div>
                </component002>
            </div>
        </div>
    </template>
    <script>
        import component002 from './component002.vue'
        export default{
            data(){
                return {}
            },
            components: {
                component002,        
            },
            computed: {},
            methods: {},
            created () {
            },
        }
    </script>
    <style scoped>
    </style>
    
  2.2、从效果图中可以看出子组件内的插槽内容已被替换为父组件插入的内容
  
  ![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo014/preview/2.png)
  
    

 