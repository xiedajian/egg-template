# egg-template

基于node egg框架搭建的博客cms

技术栈： node + mysql + sequelize + redis +eggjs


# 集成的功能

```
$ npm i --save lodash
$ npm i egg-validate --save
$ npm i egg-view-nunjucks --save
$ npm i --save egg-sequelize
$ npm i --save mysql2 
$ npm i --save egg-sequelize-auto
$ npm i jsonwebtoken
```
- egg-validate 参数校验
- egg-view-nunjucks 模板引擎
- 数据库ORM：egg-sequelize
- mysql驱动
- sequelize-auto 根据数据库表自动生成model模型
- JWT



# 项目运行前提

1. 修改 config/config.local.js 中 sequelize 本地数据库的配置




## sequelize-auto 根据数据库表自动生成model模型

执行 node ./bin/sequelize-auto_db2model.js


## sequelize  根据已经建好的 model 模型同步数据库建表

利用 app/model/adminUser.js 同步建立 admin_user 表



## 使用 vue 前后端分离测试


## 富文本


## 发邮件


## 微信授权


## 文件上传

## 发短信



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
