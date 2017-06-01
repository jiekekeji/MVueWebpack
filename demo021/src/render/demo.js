import Vue from "vue"
import demoStyle from "./demo.css"
Vue.component("render-demo", {
  render: function (createElement) {
    return createElement(
      "div", {
        "class": {
          //添加container样式
          container: true,
          //不添加parent样式
          parent: false
        },
        style: {
          width: "300px",
          height: "300px",
        },
        attrs: {
          id: "first-el",
        },
        on: {
          click: this.outTx
        },
      },
      [
        //子节点
        createElement(
          "h4", {
            style: {
              backgroundColor: "darkseagreen"
            },
            // on: {
            //   click: function (event) {
            //     console.log("event");
            //     event.stopPropagation()
            //   }
            // }
          },
          //绑定data的title值
          this.title)
      ],
    )
  },
  data () {
    return {
      title: "render createElement 示例"
    }
  },
  methods: {
    outTx(event){
      console.log("outTx", event);
    },
  }
});


