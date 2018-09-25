
/**
 * 文件下载 与 excel
 */

'use strict';

const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;

class DownloadController extends Controller {
    async index() {
        this.ctx.body = [
            '<a download href="/download">download</a>',
            '<br>',
            '<a download href="/download-image">download image</a>',
        ].join('');
    }

    // 下载文件
    async download() {
        const filePath = path.resolve(this.app.config.static.dir, 'hello.txt');
        this.ctx.attachment('hello.txt');
        this.ctx.set('Content-Type', 'application/octet-stream');
        this.ctx.body = fs.createReadStream(filePath);
    }

    // 下载图片
    async downloadImage() {
        const url = 'http://cdn2.ettoday.net/images/1200/1200526.jpg';
        const res = await this.ctx.curl(url, {
            streaming: true,
        });

        this.ctx.type = 'jpg';
        this.ctx.body = res.res;
    }

    // 生成 excel表格， 文件下载
    async downloadExcel(){
        let filePath = await this.ctx.service.excel.createExcel()
        this.ctx.attachment('侵权列表.xlsx');
        this.ctx.set('Content-Type', 'application/octet-stream');
        this.ctx.body = fs.createReadStream(filePath);
    }
}

module.exports = DownloadController;
