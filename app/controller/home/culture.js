
'use strict';

const Controller = require('egg').Controller;

class CultureController extends Controller {
	
	async index() {
		this.ctx.body = 'hi, egg';
		
	}
}

module.exports = CultureController;
