vue vue-cli的使用
====

一、安装node,npm.环境(mac)
----

1、下载node:地址:https://nodejs.org/en/download/, 这里下载的是macOS Binaries (.tar.gz)。

2、安装node:将下载的.tar.gz文件解压，将解压的文件夹放在某个目录下,如这放在/Users/jack/devtools/目录下:

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo001/preview/icon-install-dir.png)

3、打开终端：

   输入node -v,提示 -bash: node: command not found，貌似不行；
    
![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo001/preview/icon-command-node.png)    
     
   进入到第二步解压的目录 cd /Users/jack/devtools/node-v6.10.2/bin/ ,
   执行:./node -v,ok了。
    
![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo001/preview/icon-command-v.png)     
    
4、在其他目录下可执行node命令的环境变量配置:
   
   4.1、进入当前用户跟目录,终端输入:cd ~
    
   4.2、编辑.bash_profile文件:vim .bash_profile；.bash_profile 文件是隐藏的文件，可通过ls -al查看。
    
   4.3、在.bash_profile语句中加入如下语句:export PATH=$PATH:/Users/jack/devtools/node-v6.10.2/bin,保存退出。
    
![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo001/preview/icon-node-path.png)      
    
   4.4、让刚才配置的语句立即生效:source .bash_profile 
    
![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo001/preview/icon-node-path-ok.png)      

5、试试npm:
    
   终端输入:npm -v，提示版本号3.10.10，ok了。
    
![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo001/preview/icon-node-npm.png)
      
   安装cnpm，根据[淘宝 NPM 镜像](http://npm.taobao.org/)的使用说明：
   
   终端输入:npm install -g cnpm --registry=https://registry.npm.taobao.org
   
   安装完成后输入：cnpm -v 验证是否安装成功。
     
6、至此node、npm安装完成。


二、安装vue脚手架vue-cli.环境(mac)
----

1、全局安装：vue-cli
   
   ```
   cnpm install -g vue-cli
   ````
2、创建项目：创建名为 demo001 的项目，cd到某个目录下,执行如下命令，然后一直回车即可。

   ````
   vue init webpack demo001
   ````
   
   完成后用WebStorm打开的目录结构，如下图：
   
![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo001/preview/icon-project-struct.png)

   安装相关依赖:cd 到demo001目录，执行：
   
   ````
   cnpm install
   ````

3、运行项目：在demo001目录下执行:

   ````
   npm run dev
   ````
   
   浏览器打开：http://localhost:8080,
    
![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo001/preview/icon-browser-hello.png)

   

4、cd 到 demo001目录安装项目的依赖：
   npm install
   然后会发现有 node_modules的文件夹

5、运行vue环境：npm run dev

6、浏览器打开：http://localhost:8080


# demo001 项目的启动

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
