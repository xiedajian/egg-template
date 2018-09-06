
'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
	
	async index() {
		this.ctx.body = '后台首页';
	}
	
	
}

module.exports = IndexController;
