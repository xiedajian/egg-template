'use strict';

module.exports = appInfo => {
	const config = exports = {};
	
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1536027853318_2163';
	
	// jwt 生成 token 的秘钥
	config.jwtsecret = 'xiedajian';
	
	// 自定义中间件
	config.middleware = ['demo','notfoundHandler'];
	
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
	
	
	return config;
};
