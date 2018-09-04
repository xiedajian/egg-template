/**
 * 自定义服务demo.
 * 定义一个demo服务，作用时，替controller计算两个数字相加的结果
 * User: admin
 * Date: 2018/9/4
 * Time: 13:57
 */



// app/service/user.js
const Service = require('egg').Service;

class DemoService extends Service {
	async add(x,y) {
		console.log('正在执行自定义服务demo')
		return x+y;
	}
}

module.exports = DemoService;