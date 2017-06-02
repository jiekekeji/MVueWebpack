vue-Render函数
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo021/preview/021.gif)

基本上创建模板都会使用 template 的方式，比如这样：

```
<template>
  <div>
    <div class="item">
      <router-link to="/hello4">Render createElement之v-if</router-link>
      <router-link to="/hello2">Render createElement之v-for</router-link>
      <router-link to="/hello3">render  JSX</router-link>
    </div>
  </div>
</template>
```
如果要用编程的方式来搞，那怎么搞，这就是 render 函数。

现在我们要做一个下面样子的模板，用Render函数搞：
```
<div id="first-el" class="container" style="width: 600px; height: 400px;">
	<h4 style="background-color: darkseagreen;">Render createElement 基本示例</h4>
	<p style="background-color: beige;">样式、属性、类、事件、v-model、嵌套元素的写法</p>
	<p style="background-color: beige;">1、父组件传递的参数:8</p>
	<input>
	<p style="background-color: beige;">2、接收input的值v-model:</p>
</div>
```

一、Render createElement 基本示例

1、我们在./src/render目录下新建demo.css样式文件和demo.js,demo1.css定义两个演示做测试：

demo.css

```
.container {
  border: 1px solid gainsboro;
}

.parent {
  background-color: azure;
}

```
demo1.js

```
import Vue from "vue"
import demoStyle from "./demo.css"

Vue.component("render-demo1", {
  render: function (createElement) {
    let that = this;
    return createElement("div", {
        "class": {
          //添加container样式
          container: true,
          //不添加parent样式
          parent: false
        },
        style: {
          width: "600px",
          height: "400px",
        },
        attrs: {
          id: "first-el",
        },
        on: {
          click: () => {
            this.outClick("外层被点击了");
          }
        },
      },
      //一级子节点
      [
        //节点1
        createElement("h4", {
            style: {
              backgroundColor: "darkseagreen"
            },
            on: {
              click: () => {
                this.titleClick(event);
              }
            }
          },
          //绑定data的title值
          this.title
        ),

        //节点2
        createElement("p", {
            style: {
              backgroundColor: "beige"
            },
          },
          //绑定data值
          this.desc
        ),

        //节点3
        createElement("p", {
            style: {
              backgroundColor: "beige"
            },
          },
          //绑定props的level值
          "1、父组件传递的参数:" + this.level
        ),

        //节点4 试一下v-model
        createElement('input', {
          domProps: {
            value: that.phoneNum
          },
          on: {
            input: function (event) {
              that.phoneNum = event.target.value
            }
          }
        }),

        //节点4 试一下v-model
        createElement("p", {
            style: {
              backgroundColor: "beige"
            },
          },
          "2、接收input的值v-model:" + this.phoneNum
        ),
      ],
    )
  },

  data () {
    return {
      title: "Render createElement 基本示例",
      desc: "样式、属性、类、事件、v-model、嵌套元素的写法",
      phoneNum: ""
    }
  },

  props: {
    level: 0,
    to: ""
  },

  methods: {
    outClick(param){
      console.log("outClick", param);
    },
    titleClick(event){
      console.log("titleClick", "标题被点击了", event)
      event.stopPropagation()
    }
  }
});
```

2、在Hello1,vue中使用demo1定义的组件 render-demo1

```
<template>
  <div>
    <div>
      <!--使用demo1定义的组件 render-demo1-->
      <render-demo1 :level="8"></render-demo1>
    </div>
    <div class="item">
      <router-link to="/hello2">Render createElement之v-if</router-link>
      <router-link to="/hello3">Render createElement之v-for</router-link>
      <router-link to="/hello4">Render  JSX</router-link>
    </div>
  </div>
</template>

<script>
  import demo1 from "../render/demo1"
  export default {
    data () {
      return {}
    },
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    line-height: 30px;
    text-align: center;
    height: 30px;
    width: 280px;
    display: block;
    background-color: darkseagreen;
  }

  .item {
    margin-top: 30px;
  }

  .item > a {
    margin-top: 30px;
  }
</style>

```
二、Render createElement之v-if，demo2.js

```
import Vue from "vue"
import demoStyle from "./demo.css"

Vue.component("render-demo2", {
  render: function (createElement) {
    let that = this;
    if (this.level % 2 === 0) {
      return createElement("div", {
          class: {
            container: true
          },
          style: {
            width: "600px",
            height: "400px",
          }
        },
        [
          createElement("p", {
              style: {
                backgroundColor: "darkseagreen"
              }
            },
            "v-if的演示:点击按钮按条件显示和隐藏红色块"
          )
          //如果this.level % 2 === 0没有红色块
        ]
      );
    } else {
      return createElement("div", {
          class: {
            container: true
          },
          style: {
            width: "600px",
            height: "400px",
          }
        },
        [
          createElement("p", {
              style: {
                backgroundColor: "darkseagreen"
              }
            },
            "v-if的演示:点击按钮按条件显示和隐藏红色块"
          ),
          //如果this.level % 2 !== 0有红色块
          createElement("div", {
              style: {
                backgroundColor: "red",
                width: "150px",
                height: "150px",
                margin: " 0 auto",
                "margin-top": "30px"
              }
            }
          ),

        ]
      );
    }
  },
  data () {
    return {
      //模拟一点列表数据，演示v-for
      list: [1, 2, 3, 4, 5, 6]
    }
  },

  props: {
    level: 0,
    isShow: false
  },

  methods: {
    itemClick(item){
      console.log("条目被点击:" + item);
    }
  }
});

```
三、Render createElement之v-for，demo3.js

```
import Vue from "vue"
import demoStyle from "./demo.css"

Vue.component("render-demo3", {
  render: function (createElement) {
    let that = this;
    return createElement("div", {
        class: {
          container: true
        },
        style: {
          width: "600px",
          height: "400px",
        }
      },
      [
        createElement("p", {
            style: {
              backgroundColor: "darkseagreen"
            }
          },
          "v-for的演示:显示list: [1, 2, 3, 4, 5, 6]数据"
        ),
        //演示一下 v-for
        createElement("ul", this.list.map(function (item) {
          return createElement('li',
            {
              on: {
                click: () => {
                  that.itemClick(item);
                }
              }
            },
            "值:" + item
          )
        }))
      ]
    );
  },
  data () {
    return {
      //模拟一点列表数据，演示v-for
      list: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    itemClick(item){
      console.log("条目被点击:" + item);
    }
  }
});
```

四、Render  JSX，

1、在使用JSX之前， 先安装

```
  cnpm install babel-plugin-syntax-jsx --save-dev
  cnpm install babel-preset-es2015 --save-dev
  cnpm install babel-helper-vue-jsx-merge-props --save-dev
  cnpm install babel-plugin-transform-vue-jsx --save-dev
```
2、在.babelrc文件中加入：  "presets": ["es2015" ], "plugins": ["transform-vue-jsx"]

.babelrc

```
{
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ],
    "stage-2"
  ],
  "plugins": [
    "transform-runtime"
  ],
  "comments": false,
  "env": {
    "test": {
      "presets": [
        "env",
        "stage-2"
      ],
      "plugins": [
        "istanbul"
      ]
    }
  },
  "presets": [
    "es2015"
  ],
  "plugins": [
    "transform-vue-jsx"
  ]
}

```

3、Render  JSX 示例：demo4,js:

```
import Vue from "vue"
import demoStyle from "./demo.css"

Vue.component("render-demo4", {
  render (h) {
    return <div
      id="foo"
      //1、样式绑定
      style={{color: this.fontColor, fontSize: '14px'}}
      //2、class的绑定
      class={{container: this.isContainer}}>
      <h3
        //3、绑定事件
        on-click={this.titleClick}>
        {this.title}
      </h3>
      {/*4、v-model的处理方法*/}
      <input on-input={this.inputClick}/>
      {/*5、绑定data值*/}
      <p>响应input的输入值:{this.phoneNum}</p>

      <p>vue JSX 还没支持v-for的写法，v-for还得按照js的方式array.map()</p>
    </div>;
  },

  data () {
    return {
      title: "render 之JSX",
      phoneNum: "",
      list: [1, 2, 3, 4, 5],
      isContainer: true,
      fontColor: "red"
    }
  },

  props: {
    level: 0,
    to: ""
  },

  methods: {
    inputClick(event){
      this.phoneNum = event.target.value;
      console.log("outClick", event);
    },
    titleClick(event){
      console.log("titleClick", "标题被点击了", event)
      event.stopPropagation()
    }
  }
});
```

