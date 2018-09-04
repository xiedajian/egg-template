
'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
	
	async index() {
		this.ctx.body = {code:200,data:'api返回信息'};
	}
}

module.exports = IndexController;
