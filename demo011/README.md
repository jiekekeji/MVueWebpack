#<h1>父子组件之间的传值</h1>

  ### 父传递给子：
  <p>子组件的代码:</p>
  '
    <template>
        <div class="nav">
            <h1>这是Page2组件</h1>
            <div><label>接收父组件的传值:</label>{{inputValue}}</div>
        </div>
    </template>
    '
    <script>
        export default {
            data () {
                return {}
            },
            methods: {},
            props: {
                inputValue: ''
            },
            watch: {}
        }
    </script>
  </code></pre>