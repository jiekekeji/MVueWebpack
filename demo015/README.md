vue-cli项目的打包部署
----

   vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL.形如：http://localhost:8080/#/，  有一个#号和路由路径相隔。
   
   如何设置hash 模式和history 模式？
   
   通过路由的mode属性启用相应模式，本项目demo015,路径:./src/router/index.js,
   
   ```
   import Vue from 'vue'
   import Router from 'vue-router'
   
   Vue.use(Router)
   
   export default new Router({
     routes: [
       {
         path: '/',
         name: 'Hello',
         component: Hello
       }
     ],
     //默认为hash模式
     mode: 'history',
   })
   ```
   
一、vue-router 使用 hash 模式
-----
   
   1、将项目部署在服务器的根目录下：
   
   
   1.1、apache服务器：
   
   
   1.2、nginx服务器：
   
   
   1.3、tomcat服务器：
   
   
   
   2、将项目部署在服务器的非根目录下：


   2.1、apache服务器：
   
   
   2.2、nginx服务器：
   
   
   2.3、tomcat服务器：





二、vue-router 使用 history 模式
-----

1、将项目部署在服务器的根目录下：
   
   
   1.1、apache服务器：
   
   
   1.2、nginx服务器：
   
   
   1.3、tomcat服务器：
   
   
   
   2、将项目部署在服务器的非根目录下：


   2.1、apache服务器：
   
   
   2.2、nginx服务器：
   
   
   2.3、tomcat服务器：


三、跨域问题
----
   
   1、直接和数据接口应用放在同一域名，同一端口号下
   
   
   
   
   2、采用反向代理的方式。
   
   
   2.1、apache服务器
   
   
   
   2.2、nginx服务器：
