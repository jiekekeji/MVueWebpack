import Vue from "vue"
import demoStyle from "./demo.css"

Vue.component("render-demo3", {
  render (h) {
    return ()
  },

  data () {
    return {
      title: "render createElement 基本示例",
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


