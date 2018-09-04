/**
 * 定时任务demo.
 * 演示一个定时任务demo，每隔一段时间console.log('正在执行定时任务demo')
 * User: admin
 * Date: 2018/9/4
 * Time: 13:57
 */


const Subscription = require('egg').Subscription;

class Demo extends Subscription {
	// 通过 schedule 属性来设置定时任务的执行间隔等配置
	static get schedule() {
		return {
			interval: '1m', // 1 分钟间隔
			type: 'all', // 指定所有的 worker 都需要执行
		};
	}
	
	// subscribe 是真正定时任务执行时被运行的函数
	async subscribe() {
		
		console.log('正在执行定时任务demo')
	}
}

module.exports = Demo;