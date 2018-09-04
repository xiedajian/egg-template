/**
 * 自定义中间件demo.
 * 定义一个中间件demo，作用是，在每次http请求结束后，console.log('请求结束,执行自定义中间件demo')
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