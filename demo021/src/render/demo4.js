


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


