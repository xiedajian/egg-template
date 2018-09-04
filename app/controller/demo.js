'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {
	
	
	// 最简单的
	async index() {
		console.log(this.ctx.request);
		this.ctx.body = 'demo';
	}
	
	// 返回json数据 （API）
	async jsondemo() {
		console.log(this.ctx.request);
		this.ctx.body = {code: 200, data: 'demo-api-json'};
	}
	
	// 返回 view 模板
	async viewdemo() {
		await this.ctx.render('demo.html');;
	}
	
	// get请求参数   curl：http://127.0.0.1:7001/demo/getdemo?name=xie&age=22
	async getdemo() {
		
		let params = this.ctx.query;
		let querystring = this.ctx.querystring;
		console.log(`原始字符串：${querystring}`)
		this.ctx.body = params;
		
	}
	
	// validate 参数校验   curl：http://127.0.0.1:7001/demo/getdemo?name=xie&age=22
	async validatedemo() {
		
		const ctx = this.ctx;
		let params = ctx.query;
		
		try {
			
			// ctx.validate() 方法来校验参数
			// 第一个参数是规则，第二参数是待校验的参数，如果不传第二个参数会自动校验 `ctx.request.body
			ctx.validate({
				name: {type: 'string'},
				age: {type: 'string'},
			},params);
			
			
		} catch (err) {
			// ctx.logger.warn(err.errors);
			console.log(err);
			ctx.body = {success: '校验失败',data:err};
			return;
		}
		this.ctx.body = params;
	}
	
	
	// post请求参数
	async postdemo() {
		console.log(this.ctx.request);
		this.ctx.body = 'hi, egg222';
		
	}
	
	// router路由参数   curl: http://127.0.0.1:7001/demo/routerdemo/xie
	async routerdemo() {
		let params = this.ctx.params;
		this.ctx.body = params;
		
	}
	
	// 调用 model
	async modeldemo() {
		console.log(this.ctx.request);
		this.ctx.body = 'hi, egg222';
		
	}
	
	// 调用自定义 service
	async servicedemo() {
		console.log(this.ctx.request);
		this.ctx.body = 'hi, egg222';
		
	}
	
	
}

module.exports = DemoController;
