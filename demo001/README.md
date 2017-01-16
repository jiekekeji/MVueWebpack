vue脚手架的使用：
1、首先安装好node和npm.

2、全局安装：vue-cli
   npm install -g vue-cli

3、cd到想要创建新项目的文件夹下，然后使用vue init指令，
   vue init 模板类型 项目名称
   如:vue init webpack demo001

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
