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


