'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const {router, controller} = app;
	
	// demo演示
	router.get('index','/demo', controller.demo.index);     // 路由起别名，在view中使用
	router.get('/demo/jsondemo', controller.demo.jsondemo);
	router.get('/demo/viewdemo', controller.demo.viewdemo);
	router.get('/demo/getdemo', controller.demo.getdemo);
	router.get('/demo/validatedemo', controller.demo.validatedemo);
	router.post('/demo/postdemo', controller.demo.postdemo);
	router.get('/demo/routerdemo/:name', controller.demo.routerdemo);
	router.get('/demo/modeldemo', controller.demo.modeldemo);
	router.get('/demo/servicedemo', controller.demo.servicedemo);
	
	
	// 前台home
	router.get('/', controller.home.home.index);
	
	// 后台admin
	router.get('/admin', controller.admin.index.index);
	
	
	// 接口API
	router.get('/api', controller.api.index.index);
};
