#父子组件之间的传值#

  ###父传递给子：###
  <p>子组件的代码:</p>
  </code></pre>
  
    <script>
        export default {
            data () {
                return {}
            },
            methods: {},
            props: {
                //接收传递的值
                inputValue: ''
            },
            watch: {}
        }
    </script>
  </code></pre>