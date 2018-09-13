'use strict';

// 把 config 注入到 locals 中，在模板引擎中可用
module.exports = (options, app) => {
	return async function(ctx, next) {
		ctx.locals.config = app.config;
		// ctx.locals.csrf = ctx.csrf;
		await next();
	};
};