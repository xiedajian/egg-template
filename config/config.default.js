'use strict';

module.exports = appInfo => {
	const config = exports = {};
	
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1536027853318_2163';
	
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
	
	notfound: {
		pageUrl: '/404.html'
	}
	
	return config;
};
