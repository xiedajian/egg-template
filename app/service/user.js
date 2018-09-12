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
	async buildToken(id){
		var token = jwt.sign({ id: id }, 'xiedajian');
		return token;
	}
	
	// 根据 token 获取用户 id
	async getUserByToken(token){
		var res = null;
		try {
			res = jwt.verify(token, 'xiedajian');
		}catch(err) {
			console.log(err);
		}
		return res;
		
	}
	
}

module.exports = JwtService;