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
			// host: '127.0.0.1',   // Redis host
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
		// host: '127.0.0.1',
		host: '47.104.248.84',
		port: 3306,
		database: 'hushangmingjia',
		username: 'root',
		// password: 'root',
		password: '123456',
	};
	
	
	
	return config;
};