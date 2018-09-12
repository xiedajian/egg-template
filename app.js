/**
 * 入口文件.
 * User: admin
 * Date: 2018/9/12
 * Time: 14:58
 */


module.exports = app => {
	app.beforeStart(async () => {
		
		// 应用会等待这个函数执行完成才启动
		await console.log('==============自定义入口执行ok==============');
		
		// 单进程的可动态设置的 全局变量
		app.locals.appName = 'hushangmingjia';
		
	})
}