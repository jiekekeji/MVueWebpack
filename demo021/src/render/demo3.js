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
