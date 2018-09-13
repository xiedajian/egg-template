'use strict';

module.exports = appInfo => {
	const config = exports = {};
	
	/**
	 * 网站站点基本设置
	 */
	config.name = '蝼蚁';
	config.description = '蝼蚁CMS系统';
	config.keywords = '蝼蚁,CMS';
	config.site_logo = '/public/images/cnodejs_light.svg';
	config.site_icon = '/public/images/cnode_icon_32.png';
	config.host = 'http://www.louyi.com';
	
	
	// debug 为 true 时，用于本地调试
	config.debug = true;
	// 初始化项目，用于项目首次初始化数据库表
	config.initDB = false;

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1536027853318_2163';
	
	// jwt 生成 token 的秘钥
	config.jwtsecret = 'xiedajian';
	
	// 中间件
	config.middleware = ['demo','notfoundHandler','locals'];
	
	// egg-view 模板引擎配置
	config.view = {
		mapping:{
			defaultViewEngine:'nunjucks',
			'.html': 'nunjucks',
			defaultExtension:'.html'
		},
	};
	
	// 暂时关闭 security csrf
	exports.security = {
		csrf: false
	};
	
	
	// redis单客户端配置
	config.redis = {
		client: {
			port: 6379,          // Redis port
			host: '127.0.0.1',   // Redis host
			password: '',
			db: 0,
		},
	}
	
	// ORM: sequelize 本地开发时配置 , 单个数据库链接
	config.sequelize = {
		delegate: 'model',  // load all models to app.model and ctx.model
		baseDir: 'model',   // load models from `app/model/*.js`
		dialect: 'mysql',   // support: mysql, mariadb, postgres, mssql
		host: '127.0.0.1',
		port: 3306,
		database: 'demo',
		username: 'root',
		password: 'root',
	};
	
	// 邮箱配置
	config.mail_opts = {
		host: 'smtp.163.com',
		port: 25,
		secure: true,
		auth: {
			user: 'xx@163.com',
			pass: 'xx',
		},
		ignoreTLS: true,
	};

	
	return config;
};
