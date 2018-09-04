/**
 * 开发阶段配置.
 * User: admin
 * Date: 2018/9/4
 * Time: 13:58
 */


'use strict';

module.exports = appInfo => {
	const config = exports = {};
	
	// ORM: sequelize 本地开发时配置 , 单个数据库链接
	config.sequelize = {
		delegate: 'model',  // load all models to app.model and ctx.model
		baseDir: 'model',   // load models from `app/model/*.js`
		dialect: 'mysql',   // support: mysql, mariadb, postgres, mssql
		host: '127.0.0.1',
		port: 3306,
		database: 'egg_demo',
		username: 'root',
		password: 'root',
	};
	
	// ORM: sequelize 配置 , 多数据库链接
	// config.sequelize = {
	// 	datasources: [
	// 		{
	// 			delegate: 'model',  // load all models to app.model and ctx.model
	// 			baseDir: 'model',   // load models from `app/model/*.js`
	// 			dialect: 'mysql',   // support: mysql, mariadb, postgres, mssql
	// 			host: '127.0.0.1',
	// 			port: 3306,
	// 			database: 'egg_demo',
	// 			username: 'root',
	// 			password: 'root',
	// 		},
	// 		{
	// 			delegate: 'adminModel', // load all models to app.adminModel and ctx.adminModel
	// 			baseDir: 'admin_model', // load models from `app/admin_model/*.js`
	// 			dialect: 'mysql',
	// 			host: '47.104.248.84',
	// 			port: 3306,
	// 			database: 'egg_demo',
	// 			username: 'root',
	// 			password: 'root',
	// 		},
	// 	],
	// }
	
	
	return config;
};