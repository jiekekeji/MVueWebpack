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


