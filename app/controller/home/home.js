
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	
	async index() {
		
		this.ctx.logger.warn('==========================')
		let banners =await this.ctx.model.Banner.findAll()
		console.log(banners[0]);
		let website =await  this.ctx.model.Webset.findAll();
		// console.log(website);
		console.log(typeof website);
		let links = await this.ctx.model.Links.findAll({where:{id:{$lt:12}}})
		console.log(links.length);
		await this.ctx.service.cache.setex('name','hushangmingjia',60*60*24)
		let res = await this.ctx.service.cache.get('name')
		console.log(res);
		console.log(this.ctx.app.locals.appName);   // 获取全局变量
		await this.ctx.render('home/index',{banners})
	}
}

module.exports = HomeController;
