'use strict';

module.exports = appInfo => {
	const config = exports = {};
	
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1536027853318_2163';
	
	// add your config here
	config.middleware = ['demo'];
	
	// egg-view 模板引擎配置
	config.view = {
		mapping:{
			'.html': 'egg-view',
		},
	};
	
	return config;
};
