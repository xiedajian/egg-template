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

		// 首次运行，初始化项目，同步数据库建表
		if(app.config.initDB){
            console.log('::::::::无需创建数据库');
			try{
                await app.model.sync();
                console.log('::::::::初始化项目，数据库建表成功');
			}catch (e){
                console.log('::::::::初始化项目，数据库建表失败',e);
			}
        }else {
            console.log('::::::::无需同步数据库');
		}



		// 单进程的可动态设置的 全局变量
		app.locals.appName = 'hushangmingjia';
		
	})
}