路由导航的传值和取值:
--------------------

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo005/preview/demo005.gif)

1、声明式导航,采用<router-link to="/path"></router-link>超链接方式，传参方式 ?param1=v1&param2=v2;
----------------------------------------------

```
   <ul>
       <li>
           <router-link to="/page1">跳转到Page1组件不带参数</router-link>
       </li>
       <li>
           <router-link to="/page2?msg1=声明式导航传值">跳转到Page2组件携带参数msg1</router-link>
       </li>
       <li>
           <input placeholder="参数msg的值" v-model="param1"/>
           <router-link :to="path1">跳转到Page3组件携带参数msg1</router-link>
       </li>
   </ul>
```

取值方式：let param1=this.$route.query.param1  let param2=this.$route.query.param2

```
   data(){
       return {
          msg1: this.$route.query.msg1,
       }
   },
```

2、编程式导航：按路由的命名.按照路由配置的name属性。
----------------------------------------------

路由配置文件示例：

```
 {
    path: '/page1',
    name: 'page1',
    component: Page1,
  },
```

导航和传值方式：this.$router.push({name: 'page2', params: {msg2: this.param2}});

```
    <ul>
        <li>
            <a @click="navByName(1)">跳转到Page1组件不带参数</a>
        </li>
        <li>
            <a @click="navByName(2)">跳转到Page2组件携带参数msg2</a>
        </li>
        <li>
            <input placeholder="参数msg的值" v-model="param2"/>
            <a @click="navByName(3)">跳转到Page3组件携带参数msg2</a>
        </li>
    </ul>
```

```
    navByName: function (index) {
        switch (index) {
            case 1:
                this.$router.push({name: 'page1'});
                break;
            case 2:
                this.$router.push({name: 'page2', params: {msg2: this.param2}});
                break;
            case 3:
                let obj = {param2: index, name: this.param2};
                this.$router.push({name: 'page3', params: {msg2: obj}});
                break;

        }
    },
```

取值方式：let msg2=this.$route.params.msg2,

```
      data(){
          return {
              //注意这里使用的是params,和msg1的query不同
              msg2: this.$route.params.msg2,
          }
      },
```

3、编程式导航：按路由的路径.按照路由配置的path属性。
----------------------------------------------

导航和传值方式:

```
    <ul>
        <li>
            <a @click="navByPath(1)">跳转到Page1组件不带参数</a>
        </li>
        <li>
            <a @click="navByPath(2)">跳转到Page2组件携带参数msg3</a>
        </li>
        <li>
            <input placeholder="参数msg的值" v-model="param3"/>
            <a @click="navByPath(3)">跳转到Page3组件携带参数msg3</a>
        </li>
    </ul>
```

```
    navByPath: function (index) {
        switch (index) {
            case 1:
                this.$router.push({path: '/page1'});
                break;
            case 2:
                this.$router.push({path: '/page2', query: {msg3: this.param3}});
                break;
            case 3:
                let obj = {param3: index, name: this.param3};
                this.$router.push({path: '/page3', query: {msg3: obj}});
                break;

        }
    },
```

取值方式：使用的是query,let msg3=this.$route.query.msg3.

```
    data(){
        return {
            msg3: this.$route.query.msg3
        }
    },
```