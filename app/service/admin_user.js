

// admin_user

const md5 = require('md5')
const Service = require('egg').Service;

class AdminUser extends Service {
	
	async login(username,password) {
		
		if(username = 'xiedajian' && password == '123456')return true
		
		return false
	}
	
	async create_user() {
		return this.ctx.model.AdminUser.create({
			username:'admin2',
			password:'1111',
			nickname:'sunxun',
			avator:'2',
		})
	}
	
}

module.exports = AdminUser;