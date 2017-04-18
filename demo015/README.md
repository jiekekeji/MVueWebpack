vue-cli项目的打包部署
----

   vue-cli项目的打包命令为:

   ```
   npm run build
   ```

   默认的打包配置为：vue-router使用hash模式；打包后的文件需放在服务器的根目录。

1、vue-router如何设置hash 模式和history 模式？

   vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL.形如：http://localhost:8080/#/，  有一个#号和路由路径相隔。

   路由的 history 模式，利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。URL形如：http://localhost:8080/page1.没有#号。

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


2、如何配置打包后服务器端存放的目录?

   通过配置./src/config/index.js文件build区域的 assetsPublicPath: '/',，配置打包目录：

   ```
   build: {
       env: require('./prod.env'),
       index: path.resolve(__dirname, '../dist/index.html'),
       assetsRoot: path.resolve(__dirname, '../dist'),
       assetsSubDirectory: 'static',
       //如打包后的文件需要放在webapp下，
       //那么修改为assetsPublicPath：'/webapp/'
       assetsPublicPath: '/',
       productionSourceMap: true,
       // Gzip off by default as many popular static hosts such as
       // Surge or Netlify already gzip all static assets for you.
       // Before setting to `true`, make sure to:
       // npm install --save-dev compression-webpack-plugin
       productionGzip: false,
       productionGzipExtensions: ['js', 'css'],
       // Run the build command with an extra argument to
       // View the bundle analyzer report after build finishes:
       // `npm run build --report`
       // Set to `true` or `false` to always turn it on or off
       bundleAnalyzerReport: process.env.npm_config_report
   },
   ```

3、几种情况的打包

  打包一、vue-router 使用 hash 模式,打包后的目录为根目录。

  无需修改配置文件，直接执行npm run build,将生成dist目录下的index.html、static拷贝到根录下即可。

  打包二、vue-router 使用 hash 模式,打包后的目录为非根目录。

  将./src/config/index.js文件build区域的 assetsPublicPath: '/',设置为具体目录，如需要将打包的文件放在服务器根目录下的webapp目录下。

  配置为：assetsPublicPath: '/webapp/',然后执行打包命令（npm run build），将生成dist目录下的index.html、static拷贝到webapp录下即可

  打包三、vue-router 使用 history 模式,打包后的目录为根目录。

  编辑文件./src/router/index.js，添加属性 mode: 'history',添加后如下：

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

   ./src/config/index.js文件build区域的 assetsPublicPath: '/',默认为根目录。

   执行npm run build,将生成dist目录下的index.html、static拷贝到根目录下。

   注意点：vue-router 使用 history 模式时，服务器需要配置好404页面。如当前例子demo015，打包部署后浏览器直接访问:
   http://localhost,  页面显示正常，当跳转到  http://localhost/page1 后刷新页面，提示 The requested URL /page1 was not found on this server.
   因为/page1在服务端上是不存在的，所以当访问的资源不存在时，默认加载/index.html这个文件。

   未配置404时：

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo015/preview/history-root.gif)

   已配置404时：

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo015/preview/history-root-ok.gif)

  打包四、vue-router 使用 history 模式,打包后的目录为非根目录。例：打包后需放在webapp目录下，

  ./src/config/index.js文件build区域的 assetsPublicPath: '/，配置为：assetsPublicPath: '/webapp/',

  同时在./src/router/index.js，添加属性  base: '/webapp/',添加后如下：

  ```
  export default new Router({
    routes: [
      {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/page1',
        name: 'Page1',
        component: Page1
      },
      {
        path: '/page2',
        name: 'Page2',
        component: Page2
      },
    ],
    // 默认为hash模式
    mode: 'history',
    base: '/webapp/'
  })
  ```

  执行npm run build,将生成dist目录下的index.html、static拷贝到/webapp目录下。

  和打包三 一样，vue-router 使用 history 模式都需要在服务端配置404，出现404后加载/webapp/index.html这个文件。

4、404配置示例：
----

4.1、apache服务器，
------
   版本：httpd-2.4.25-x64，下载地址： http://www.apachehaus.com/cgi-bin/download.plx  ，下载完成后解压到某个目录下即可。

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo015/preview/apache-download.png)

   配置开始：

  (1)、编辑器打开 conf/httpd.conf 配置文件、开启rewrite_module模块（将前面的#号去掉）。

  ```
  	#LoadModule remoteip_module modules/mod_remoteip.so
  	#LoadModule request_module modules/mod_request.so
  	#LoadModule reqtimeout_module modules/mod_reqtimeout.so
  	#开启rewrite_module模块
  	LoadModule rewrite_module modules/mod_rewrite.so
  	#LoadModule sed_module modules/mod_sed.so
  	#LoadModule session_module modules/mod_session.so
  	#LoadModule session_cookie_module modules/mod_session_cookie.so
  ```

  修改Directory的AllowOverride为all，注意配置文件中有很多Directory，Directory一定是apache服务的根目录。

  ```
    DocumentRoot "${SRVROOT}/htdocs"
  	<Directory "${SRVROOT}/htdocs">
  		#
  		# Possible values for the Options directive are "None", "All",
  		# or any combination of:
  		#   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
  		#
  		# Note that "MultiViews" must be named *explicitly* --- "Options All"
  		# doesn't give it to you.
  		#
  		# The Options directive is both complicated and important.  Please see
  		# http://httpd.apache.org/docs/2.4/mod/core.html#options
  		# for more information.
  		#
  		Options Indexes FollowSymLinks

  		#
  		# AllowOverride controls what directives may be placed in .htaccess files.
  		# It can be "All", "None", or any combination of the keywords:
  		#   Options FileInfo AuthConfig Limit
  		#
  		#由原来的none改为All
  		AllowOverride All

  		#
  		# Controls who can get stuff from this server.
  		#
  		Require all granted
  	</Directory>

  ```

编辑完成，保存文件。

(2)、在根目录下面编写.htaccess文件，这里根目录为 ./htdocs.没有该文件就新建文件名为 .htaccess 的文件。
     加入下面的内容：当404时，显示的是根目录下index.html.

  ```
     ErrorDocument 404 /index.html
  ```

编辑完成，保存文件。

(3)、重启服务器，浏览器输入服务器不存在的文件路径，查看是否成功。


