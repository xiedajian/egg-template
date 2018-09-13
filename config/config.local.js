/**
 * 开发阶段配置.
 * User: admin
 * Date: 2018/9/4
 * Time: 13:58
 */


'use strict';

module.exports = appInfo => {
	const config = exports = {};
	
	// redis单客户端配置
	config.redis = {
		client: {
			port: 6379,          // Redis port
			host: '47.104.248.84',   // Redis host
			password: '',
			db: 0,
		},
	}
	
	// ORM: sequelize 本地开发时配置 , 单个数据库链接
	config.sequelize = {
		delegate: 'model',  // load all models to app.model and ctx.model
		baseDir: 'model',   // load models from `app/model/*.js`
		dialect: 'mysql',   // support: mysql, mariadb, postgres, mssql
		host: '47.104.248.84',
		port: 3306,
		database: 'hushangmingjia',
		username: 'root',
		password: '123456',
	};
	
	// 邮箱配置
	config.mail_opts = {
		host: 'smtp.163.com',
		port: 465,
		secure: true,
		auth: {
			user: 'louyi_vip@163.com',
			pass: 'louyi888',
		},
		ignoreTLS: true,
	};
	
	
	return config;
};