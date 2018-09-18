/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/9/7
 * Time: 17:53
 */

const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class JwtService extends Service {

	// 生成用户 token
	async buildToken(id) {
		var token = jwt.sign({ id: id }, 'xiedajian');
		return token;
	}

	// 根据 token 获取用户 id
	async getUserByToken(token) {
		var res = null;
		try {
			res = jwt.verify(token, 'xiedajian');
		} catch (err) {
			console.log(err);
		}
		return res;

	}


	// 检查验证码是否正确
	checkCaptcha(code) {
		const { ctx } = this
		code = code.toLowerCase()
		let sessCode = ctx.session.code ? ctx.session.code.toLowerCase() : null // 拿到之前存在session中的验证码
		// 进行验证
		if (code === sessCode) {
			// 成功后验证码作废
			ctx.session.code = null
		}
		return code === sessCode
	}


	// 后台登录操作
	async adminLogin({ username, password }) {
		const { ctx, app } = this
		const userData = await ctx.model.User.find({
			userName: username,
			password: password
		}, { password: 0, __v: 0 })
		// 找不到则返回false
		if (userData.length === 0) {
			return false
		}
		// 找到则以用户id生成token
		const token = jwt.sign({
			id: userData[0]._id
		}, app.config.jwt.cert, {
				expiresIn: '10h' // token过期时间
			})
		return {
			user: userData[0],
			token: token
		}
	}

}

module.exports = JwtService;