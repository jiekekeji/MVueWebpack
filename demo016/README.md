跨域问题
----------

一、开发过程中配置跨域：
1、在./config/index.js的dev区域的proxyTable区域加入如下内容，target为目标服务器地址：

    ```
        '/api': {
          target: 'http://www.tngou.net',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
    ```

2、请求示例，这里使用vue-resource做的请求示例。

    ```
     methods: {
          requstData1(){
            this.$http.get('http://www.tngou.net/tnfs/api/classify').then(response => {
              this.msg = response.body;
            }, response => {
            });
          },
          //将请求转发到上一步配置的 target 值
          requstData2(){
            this.$http.get("/api"+"/tnfs/api/classify").then(response => {
              this.msg = response.body;
            }, response => {
            });
          }
        }
    ```

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo016/preview/icon-kua-yu.gif)
