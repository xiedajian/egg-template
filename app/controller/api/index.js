
'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
	
	async index() {
		
		
		var token = this.service.jwt.buildUserToken(10)
		console.log(token);
		var id= this.service.jwt.getUserIdFormToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUzNjMxMzQxM30.sGslwTmJOlSgWAsMnFW1_k5nRqPLiBqCzH9UFATcEDk')
		console.log(id);
	}
	
	async test(){
	
	}
}

module.exports = IndexController;
