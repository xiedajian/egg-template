'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;

	const { demo } = controller;

	// demo演示
	router.get('demo', '/demo.html', controller.demo.index);     // 路由起别名，在view中使用
	router.get('/demo/jsondemo', controller.demo.jsondemo);
	router.get('/demo/viewdemo', controller.demo.viewdemo);
	router.get('/demo/getdemo', controller.demo.getdemo);
	router.get('/demo/validatedemo', controller.demo.validatedemo);
	router.post('/demo/postdemo', controller.demo.postdemo);
	router.get('/demo/routerdemo/:name', controller.demo.routerdemo);
	router.get('/demo/servicedemo', demo.servicedemo);
	router.get('/demo/modeldemo', demo.modeldemo);
	router.get('/demo/create_user', demo.modeldemoCreate);
	router.get('/demo/modelSync2Db', demo.modelSync2Db);
	router.get('/demo/sendmail', demo.sendmail);


	/**
	 * 前台 
	 */
	// 首页
	router.get('/', controller.home.home.index);
	// case案例
	router.get('/case', controller.home.home.index);
	// 文化
	router.get('/cultrue', controller.home.home.index);


	/**
	 * 后台
	 */
	// vue 单页面
	router.get('/admin', controller.admin.index.index);
	// 上传文件
	router.post('/admin/upload', controller.admin.upload.upload);
	// 刷新登录验证码
	router.get('/admin/user/getcaptche', controller.admin.user.getCaptcha);
	// 登录
	router.post('/admin/login', controller.admin.user.login);
	// 验证token

	/**
	 * API
	 */
	// 接口API
	router.get('/api', controller.api.index.index);
};
