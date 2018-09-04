# egg-template
基于node egg框架快速开发的模板


# 集成的功能

```
$ npm i egg-validate --save
$ npm i egg-view-nunjucks --save
$ npm i --save egg-sequelize
$ npm i --save mysql2 
```
- egg-validate 参数校验
- egg-view-nunjucks 模板引擎
- 数据库ORM：egg-sequelize




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
