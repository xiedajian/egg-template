/**
 * 检查后台管理员权限.
 * 只在 admin 模块路由中使用
 * Date: 2018/9/4
 * Time: 13:55
 */

module.exports = options => {
	return async function (ctx, next) {
		
		if (!ctx.user) {
			await ctx.render('notify/notify', { error: '你还没有登录。' });
			return;
		}
		
		if (!ctx.user.is_admin) {
			await ctx.render('notify/notify', { error: '需要管理员权限。' });
			return;
		}
	}
}