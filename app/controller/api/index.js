
'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
	
	async index() {
		
		this.ctx.body = this.ctx.apijson(200,'ok',{name:'xiedajian',age:20})
	}
	
	async test(){
	
	}
}

module.exports = IndexController;
