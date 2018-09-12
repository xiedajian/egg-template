
'use strict';

const Controller = require('egg').Controller;

class CaseController extends Controller {
	
	async index() {
		this.ctx.body = 'hi, egg';
		
	}
}

module.exports = CaseController;
