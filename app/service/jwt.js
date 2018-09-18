/**
 * json web token 生成与验证
 * User: admin
 * Date: 2018/9/7
 * Time: 17:13
 */

const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class JwtService extends Service {

	/**
	 * 生成 token
	 * @param {object} data {userId:1,isAdmin:true}
	 */
	async buildToken(data) {
		const { config } = this;

		
		var token = jwt.sign(data, config.jwtsecret);
		// token过期时间
		// var token = jwt.sign(data, config.jwtsecret, {
		// 	expiresIn: '10h'
		// });
		
		return token;
	}

	// 根据 token 获取用户 id
	async getUserIdFormToken(token) {
		const { config } = this;

		var res = null;
		try {
			res = jwt.verify(token, config.jwtsecret);
		} catch (err) {
			console.log(err);
		}
		return res;

	}

}

module.exports = JwtService;