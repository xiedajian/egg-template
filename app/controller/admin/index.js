
'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
	

	// 后台 vue 前后分离入口
	async index() {
		await this.ctx.render('admin/admin.html')	
	}


}

module.exports = IndexController;
