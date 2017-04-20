单文件组件:
------------

一、实现如下图的效果:

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo002/preview/icon-demo002.gif)

第一种实现方式:在original目录下，

新建html1.html,添加如下内容

    ```
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>html1</title>
        <link href="style/reset.css" rel="stylesheet" type="text/css"/>
        <style>
            .nav-top {
                width: 100%;
                height: auto;
                background-color: lightgray;
            }
    
            .top-menu {
                list-style: none;
                height: 60px;
                width: 1240px;
                margin: 0 auto;
            }
    
            .top-menu > li {
                text-align: center;
                line-height: 60px;
                width: 120px;
                height: 60px;
                float: left;
            }
    
            .content {
                width: 1240px;
                height: 380px;
                margin: 0 auto;
                background-color: darkgrey;
                line-height: 120px;
                text-align: center;
            }
    
            .footer {
                height: 120px;
                width: 100%;
                text-align: center;
                line-height: 120px;
                background-color: beige;
            }
        </style>
    </head>
    <body>
    <div class="nav-top">
        <ul class="top-menu">
            <li>
                <a href="#">灰色组件</a>
            </li>
            <li>
                <a href="html2.html">淡绿色组件</a>
            </li>
        </ul>
    </div>
    
    <div class="content">
        <span>主体内容组件</span>
    </div>
    
    <div class="footer">
        <span>友情链接</span>
    </div>
    </body>
    </html>
    ```

新建html2.html,由于顶部和底部是一样的，将html1.html拷贝出来，更改中间的部分，内容如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>html2</title>
    <link href="style/reset.css" rel="stylesheet" type="text/css"/>
    <style>
        .nav-top {
            width: 100%;
            height: auto;
            background-color: lightgray;
        }

        .top-menu {
            list-style: none;
            height: 60px;
            width: 1240px;
            margin: 0 auto;
        }

        .top-menu > li {
            text-align: center;
            line-height: 60px;
            width: 120px;
            height: 60px;
            float: left;
        }

        .content {
            width: 1240px;
            height: 380px;
            margin: 0 auto;
            background-color: darkseagreen;
            line-height: 120px;
            text-align: center;
        }

        .footer {
            height: 120px;
            width: 100%;
            text-align: center;
            line-height: 120px;
            background-color: beige;
        }
    </style>
</head>
<body>
<div class="nav-top">
    <ul class="top-menu">
        <li>
            <a href="html1.html">灰色组件</a>
        </li>
        <li>
            <a href="#">淡绿色组件</a>
        </li>
    </ul>
</div>

<div class="content">
    <span>主体内容组件</span>
</div>

<div class="footer">
    <span>友情链接</span>
</div>
</body>
</html>
```

实现完毕，出现大量冗余代码，以后需要修改头部和顶部，每个页面都要改动。


第二种实现方式：

先划分页面结构如下:

![image](https://github.com/jiekekeji/MVueWebpack/blob/master/demo002/preview/icon-demo002-2.png)