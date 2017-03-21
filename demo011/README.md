<h1>父子组件之间的传值</h1>

<h3>父传递给子：</h3>
  <h4>子组件的代码:</h4>
  <pre><code>
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
  </code></pre>
  
  <h4>父组件的代码:</h4>
  <pre><code>
   &lt;template&gt;
       &lt;div class="content"&gt;
           &lt;h1 style="height: 50px;line-height: 50px;text-indent: 30px"&gt;父组件:&lt;/h1&gt;
           &lt;div style="height: 60px"&gt;&lt;label&gt;传值给子组件page2:&lt;/label&gt;&lt;input v-model="p2cValue"&gt;&lt;/div&gt;
           &lt;!--将p2cValue的值传递给page2组件，inputValue已在Page2的props定义好--&gt;
           &lt;page2 :inputValue="p2cValue"&gt;&lt;/page2&gt;
       &lt;/div&gt;
   &lt;/template&gt;
   
   &lt;script&gt;
       //引入子组件
       import page2 from '../components/Page2.vue';
       export default{
           data(){
               return {
                   p2cValue: 0,
               }
           },
           //声明
           components: {
               page2,
           },
           computed: {},
           methods: { 
           },
           created () {
           },
       }
   &lt;/script&gt;

  </code></pre>
  
<h3>子传递给父：</h3>
<h4>子组件的代码:</h4>
  <pre><code>
 &lt;template&gt;
     &lt;div class="footer"&gt;
         这是Page3
         &lt;div&gt;&lt;label&gt;传值给父组件:&lt;/label&gt;&lt;input v-model="c32pValue"&gt;&lt;/div&gt;
     &lt;/div&gt;
 &lt;/template&gt;
 
 &lt;script&gt;
     export default{
         data(){
             return {
                 c32pValue: 0,
             }
         },
         components: {},
         methods: {
             toParent(data){
                 this.$emit('child-say', data);
             }
         },
         watch: {
             'c32pValue': function () {
                 this.toParent(this.c32pValue);
             }
         }
     }
 &lt;/script&gt;
  </code></pre>

  <h4>父组件的代码:</h4>
  <pre><code>
&lt;template&gt;
    &lt;div class="content"&gt;
        &lt;h1 style="height: 50px;line-height: 50px;text-indent: 30px"&gt;父组件:&lt;/h1&gt;
        &lt;div style="height: 60px"&gt;&lt;label&gt;传值给子组件page2:&lt;/label&gt;&lt;input v-model="p2cValue"&gt;&lt;/div&gt;
        &lt;div style="height: 60px"&gt;&lt;label&gt;接收子组件page3的传值:&lt;/label&gt;{{c2pValue}}&lt;/div&gt;
        &lt;!--将p2cValue的值传递给page2组件--&gt;
        &lt;page2 :inputValue="p2cValue"&gt;&lt;/page2&gt;
        &lt;!--绑定自定义事件child-say，当child-say事件出发时执行listenChild--&gt;
        &lt;page3 v-on:child-say="listenChild"&gt;&lt;/page3&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
    import page2 from '../components/Page2.vue';
    import page3 from '../components/Page3.vue';
    export default{
        data(){
            return {
                p2cValue: 0,
                c2pValue: 0,
            }
        },
        components: {
            page2,
            page3
        },
        computed: {},
        methods: {
            listenChild: function (somedata) {
                this.c2pValue = somedata;
            }
        },
        created () {
        },
    }
&lt;/script&gt;


  </code></pre>