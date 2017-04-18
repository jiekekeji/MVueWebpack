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


二、发布过程中的跨域问题

1、直接和后台接口应用放在同一个域名同一端口下，请求地址的形式如下，表示当前应用根目录下的 /tnfs/api/classify 资源:

  ```
  this.$http.get("/tnfs/api/classify").then(response => {
       this.msg = response.body;
      }, response => {
  });
  ```

2、前端应用和后台接口应用不在同一域名同一端口下，

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo016/preview/icon-server-proxy.png)


三、常用静态资源服务器的简单配置示例：

1、apache服务器配置反向代理

修改httpd.conf配置文件（./conf/httpd.conf），去掉以下三行前面 # 号，从而启用Apache proxy module。

   ```
   LoadModule proxy_module modules/mod_proxy.so
   LoadModule proxy_http_module modules/mod_proxy_http.so
   Include conf/extra/httpd-vhosts.conf
   ```
编辑完成，保存。

编辑httpd-vhosts.conf配置文件（.conf/extra/httpd-vhosts）,加入以下两行，将请求localhost/abc 转发到 http://baidu.com/abc：

   ```
   ProxyRequests Off
   ProxyPass /abc http://baidu.com/abc
   ```

配置后如下：

  ```
  <VirtualHost _default_:80>
  	DocumentRoot "${SRVROOT}/htdocs"
  	#ServerName www.example.com:80
  </VirtualHost>

  ProxyRequests Off
  ProxyPass /abc http://baidu.com/abc

  # Add any other Virtual Hosts below
  ```

编辑完成，保存。

重启。输入http://localhost/abc ,返回百度主页。


2、nginx配置反向代理

在server区域加入：

   ```
   #配置反向代理：将所有访问 /tnfs 目录的请求，转向到http://www.tngou.net/tnfs下
      location /tnfs/ {
        proxy_pass  http://www.tngou.net;
        proxy_redirect     off;
        proxy_set_header   Host             $host;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
      }
   ```

保存后退出，重启或 nginx -s reload.

浏览器输入:http://localhost/tnfs/api/list  即访问：http://www.tngou.net/tnfs/api/list。
