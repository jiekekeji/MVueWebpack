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
            height: "300px",
            width: "300px"
          }
        },
        [
          createElement("h2", "v-if的演示")
        ]
      );
    } else {
      return createElement("div", {
          class: {
            container: true
          },
          style: {
            height: "300px",
            width: "300px"
          }
        },
        [
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


