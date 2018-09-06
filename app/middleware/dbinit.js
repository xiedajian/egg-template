/**
 * 自动生成 mysql 数据库表的中间件.
 * 根据已经建好的 model 模型，同步创建表
 * 中间件的挂载和执行顺序，是在config/config.default.js
 * User: admin
 * Date: 2018/9/4
 * Time: 13:55
 */

module.exports = options => {
	return async function demo(ctx, next) {
		
		await next();
		
		console.log('请求结束,执行自定义中间件demo')
	}
}