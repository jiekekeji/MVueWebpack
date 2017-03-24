理解slot，结合slot和props定义按钮组件
====
  如果说插座是一个组件，那么插座上的插槽可不可以就理解为slot呢？插槽是在插座生产的时候已经固定好位置和大小。
    
  1、假设现在有一个组件如下:组件内没有定义任何的插槽，
  
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
    
    
    
    

 