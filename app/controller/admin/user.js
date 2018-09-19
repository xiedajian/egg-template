
'use strict';

const Controller = require('egg').Controller;
var _ = require('lodash');

class UserController extends Controller {


	// 登录
	async login() {
		const {ctx} = this
		// const username = ctx.params.username;
		// const password = ctx.params.password;
		// const code = ctx.params.code;
		const { username, password, code } = ctx.request.body

		console.log(code);
		
		let {login_code} = ctx.session // 获取session保存的验证码
		console.log(login_code);
		
		// 先校验验证码
		if(!code ||  !login_code|| code.toLowerCase() !== login_code.toLowerCase()){
			
			this.ctx.body = ctx.apijson(400,'验证码错误','')	
			return
		}

		// 验证账号
		let res =await this.ctx.service.adminUser.adminLogin({username, password})

		console.log(res.user.username);
		
		if (res) {
			this.ctx.body = ctx.apijson(200,'ok',res)
		}else{
			this.ctx.body = ctx.apijson(400,'账号或者密码错误','')
		}

	

	}

	// 生成验证码
	async getCaptcha() {

		const { ctx } = this

		let captcha =await ctx.service.adminUser.getCaptcha()

		console.log(captcha.text);

		// 把生成的验证码文本信息（如：t8ec），存入session，以待验证
		ctx.session.login_code = captcha.text

		console.log(ctx.session.login_code);
		
		// 将生成的验证码svg图片返回给前端
		// this.ctx.set('Content-Type', 'text/html');
		// ctx.body = captcha.data
		ctx.body = ctx.apijson(200,'ok',captcha.data)
	}



	// 注销
	async logout() {
		const { ctx } = this;
		ctx.session = null;
		ctx.redirect('/admin/login');
	}


}

module.exports = UserController;
