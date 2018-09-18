

// admin_user

const md5 = require('md5')
const Service = require('egg').Service;

class AdminUser extends Service {



	// 生成登录时验证码,设置session
	async getCaptcha() {
		let res = await this.ctx.service.svgCaptche.getCaptcha()
		return res
	}

	// 添加管理员
	async create_user() {
		return this.ctx.model.AdminUser.create({
			username: 'admin2',
			password: '1111',
			nickname: 'sunxun',
			avator: '2',
		})
	}

	// 后台登录操作
	async adminLogin({ username, password }) {

		const { ctx, app } = this

		const userData = await ctx.model.User.find({
			userName: username,
			password: password
		})

		// 找不到则返回false
		if (userData.length === 0) {
			return null
		}

		// 生成token
		var token = null;
		try {
			token = ctx.service.jwt.buildToken({id:userData[0].id,isAdmin:true});
		} catch (err) {
			console.log(err);
		}

		return {
			user: userData[0],
			token: token
		}
	}

}

module.exports = AdminUser;