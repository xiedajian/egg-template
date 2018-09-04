# egg-template
基于node egg框架快速开发的模板


# 集成的功能

```
$ npm i egg-validate --save
```
- egg-validate 参数校验
- 数据库ORM：egg-sequelize




# 案例中演示了基本的功能

通过自定义下面这些文件演示一整套的功能

- demo.js controller控制器
- demo.js Model模型
- demo.html   view 视图
- demo.js middleware中间件
- demo.js service服务
- demo.js schedule定时任务

从这个最最基础的案例可以帮助我们快速理解

- 自定义中间件，及中间价挂载到config
- 自定义service，及在controller中调用service
- 使用数据库ORM：sequelize，在config配置，自定义model，并在controller调用 
- 自定义路由，controller分层
- 路由传参，get，post传参
- Validate 插件参数校验，先config配置，再使用
- 使用模板引擎渲染 html 模板文件，模板文件引入静态资源
- 在模板文件中使用 router ，helper
