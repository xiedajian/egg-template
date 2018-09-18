
# 案例中演示了基本的功能

通过自定义下面这些文件演示一整套的功能

- app/controller/demo.js        控制器
- app/model/demo.js             模型
- app/view/demo.html            视图
- app/middleware/demo.js        middleware中间件
- app/service/demo.js           service服务
- app/schedule/demo.js          schedule定时任务

从这个最最基础的案例可以帮助我们快速理解

- 自定义中间件，及中间价挂载到config
- 自定义service，及在controller中调用service
- 使用数据库ORM：sequelize，在config配置，自定义model，并在controller调用 
- 自定义路由，controller分层
- 路由传参，get，post传参
- Validate 插件参数校验，先config配置，再使用
- 使用模板引擎 nunjucks 渲染 html 模板文件，需要配置 config/plugin.js 和 config/config.default.js
- 熟悉模板引擎 nunjucks 语法
- 在模板文件中使用 router ，helper


## sequelize-auto 根据数据库表自动生成model模型

执行 node ./bin/sequelize-auto_db2model.js 案例


## sequelize  根据已经建好的 model 模型同步数据库建表

可参考 app.js 的做法

app.model.sync();


## sequelize 多表查询




## redis缓存数据

使用 redis, egg-redis, 配置 plugin,config

可参考 app/service/cache.js 的做法



## html 页面静态化

两种方案：
1、首次请求生成静态文件，后续访问静态html文件，更新管理略麻烦
2、使用nosql从内存中读取内容(其实这个已经不算静态化了而是缓存)，比如说redis，虽然没有纯静态化那么快，但是要远比查数据库快的多

这里采用第二种缓存方案


## 伪静态

只是url看起来像静态页面，一般就是以 html 为后缀的url

通过修改路由就可以实现


## 使用 vue 前后端分离测试

1.修改vue项目的 config/index.js 的 build 打包时以下配置

如我们想改为入口文件生成在 app/view/admin.html, 静态资源放在 app/public/ , 引用资源时 /public/demo.png可参考
```
  build: {
    // Template for index.html
    // index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    // assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',

    /**
     * 在 egg 框架中，修改为下面配置
     */
    index: path.resolve(__dirname, '../dist/admin.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'admin',
    assetsPublicPath: '/public/',
```

如果不想分成两个项目做开发的话，可以合并 vue 和 egg 的开发目录，可以自己合并开发结构，也可以使用wasywebpack搭建好的架子



## 使用 vue 后端渲染测试

使用 easywebpack 快速生成 egg + vue 多页面服务器端渲染的开发结构



## 富文本

采用轻量级的 wangEditor 编辑器

vue + wangEditor 在实现后台文章编辑


## 文件上传

参考 app/admin/upload.js 

用到 egg-cors 设置cors



## 发邮件
nodemailer发邮件
可参考 bin/nodemailer.js 案例


## 微信授权



## 发短信


## 生成验证码

svg-captcha 生成二维码

