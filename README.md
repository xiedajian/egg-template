
正在建设，敬请期待

# egg-template

基于node egg框架搭建的cms

技术栈： node + eggjs + mysql + sequelize + redis 

前台采用后端渲染方案： jquery + bootstrap

后台采用前端渲染方案： vue + vue-router + elementui

小程序端采用API方案


# 集成的功能

```
$ npm i --save lodash
$ npm i egg-validate --save
$ npm i egg-view-nunjucks --save
$ npm i --save egg-sequelize
$ npm i --save mysql2 
$ npm i --save egg-sequelize-auto
$ npm i jsonwebtoken
$ npm i egg-redis
$ npm i nodemailer
```
- lodash库
- egg-validate 参数校验
- egg-view-nunjucks 模板引擎
- 数据库ORM：egg-sequelize
- mysql驱动
- sequelize-auto 根据数据库表自动生成model模型
- JWT
- redis缓存
- nodemailer发邮件


# 运行前提

1. 配置 config 中的 sequelize, redis, mail 参数
2. 修改 config.initDB = true 利用 sequelize 同步数据库建表

# 运行

npm run dev