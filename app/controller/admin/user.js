
'use strict';

const Controller = require('egg').Controller;
var _ = require('lodash');

class UserController extends Controller {
	
	
	// 登录页面
	async login() {
		await this.ctx.render('')
	}
	
	// 登录
	async dologin() {
		this.ctx.body = '后台首页';
		const username = ctx.params.username;
		const password = ctx.params.password;
		
		// 参数校验
		
		// 验证账号
		let userInfo = this.ctx.service.admin_user.login(username,password)
		
		if(userInfo){
			this.ctx.session()
		}
		
		this.ctx.redirect('/admin/index')
		
		
	}
	
	// 注销
	async logout() {
		const { ctx } = this;
		ctx.session = null;
		ctx.redirect('/admin/login');
	}
	
	
}

module.exports = UserController;
