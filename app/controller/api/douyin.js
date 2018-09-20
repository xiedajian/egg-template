
'use strict';

const Controller = require('egg').Controller;

class DouyinController extends Controller {

  // 抖音查询
  async search() {
    const { ctx } = this

    let {pageIndex,pageNum,platform_id,keyword} = ctx.query

    console.log(ctx.query);
    

    let list = await ctx.model.Video.findAll({where:{'platform_id':1}, offset: 10, limit: 2})

    ctx.body = list
  }

}

module.exports = DouyinController;
