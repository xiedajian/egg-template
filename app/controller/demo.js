'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {
	
	
	// 最简单的
	async index() {
		// 注意：ctx.body 是 ctx.response.body 的简写，不要和 ctx.request.body 混淆了
		this.ctx.body = 'demo';
	}
	
	// 返回json数据 （API）
	async jsondemo() {
		this.ctx.body = {result:'success', data: 'demo-api-json'};
	}
	
	// 返回 view 模板
	async viewdemo() {
		let msg = 'i am msg';
		let food = {
			'ketchup': '5 tbsp',
			'mustard': '1 tbsp',
			'pickle': '0 tbsp'
		};
		let b = true;
		let h = '<button onclick="btnClick()">我是按钮</button>'
		await this.ctx.render('demo',{msg,food,b,h});;
	}
	
	// get请求参数   curl：http://127.0.0.1:7001/demo/getdemo?name=xie&age=22
	async getdemo() {
		
		let params = this.ctx.query;    // 通过 this.ctx.query 获取get参数
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
	
	
	// post请求参数     （挂载在 this.ctx.request.body 上）
	async postdemo() {
		var params = this.ctx.request.body;     // 包含 _csrf参数，来进行 CSRF 安全校验
		this.ctx.body = params;
	}
	
	// router路由参数   curl: http://127.0.0.1:7001/demo/routerdemo/xie
	async routerdemo() {
		let params = this.ctx.params;   // 通过this.ctx.params来获取路由参数
		this.ctx.body = params;
	}
	
	// 调用 model         （挂载在 this.ctx.model 上）
	async modeldemo() {
		console.log(this.ctx.request);
		var user = await this.ctx.model.Demo.findById(1);
		this.ctx.body = user;
		
	}
	
	// 调用自定义 service    （挂载在 this.ctx.service 上）
	async servicedemo() {
		var num = await this.ctx.service.demo.add(2,3)      // 注意 await
		this.ctx.body = num;
	}
	
	
}

module.exports = DemoController;
