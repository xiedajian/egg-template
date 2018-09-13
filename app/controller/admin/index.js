
'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
	
	async index() {
		this.ctx.body = '后台首页';
		
		
	}
	
	// 测试vue
	async vueAdmin() {
		await this.ctx.render('admin/admin.html')
		
	}
}

module.exports = IndexController;
