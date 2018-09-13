


## sequelize-auto 根据数据库表自动生成model模型

执行 node ./bin/sequelize-auto_db2model.js 案例


## sequelize  根据已经建好的 model 模型同步数据库建表

可参考 app.js 的做法

app.model.sync();

## redis缓存数据

## html静态化


## 伪静态



## 使用 vue 前后端分离测试

1.修改vue项目的 config/index.js 的 build 打包时以下配置

## 使用 vue 后端渲染测试
使用 easywebpack 生成 egg + vue 多页面服务器端渲染 

## 富文本


## 发邮件
nodemailer发邮件
可参考 bin/nodemailer.js 案例

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