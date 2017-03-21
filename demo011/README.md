<h1>父子组件之间的传值</h1>

<h3>父传递给子：</h3>
  <h4>子组件的代码:</h4>
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