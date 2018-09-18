
'use strict';

const Controller = require('egg').Controller;
//node.js 文件操作对象
const fs = require('fs');
//node.js 路径操作对象
const path = require('path');
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');

//还有我们这里使用了egg-multipart
const md5 = require('md5');


class UploadController extends Controller {

	/**
	 * 单文件上传文件
	 */
	async upload() {
		const ctx = this.ctx;
		//egg-multipart 已经帮我们处理文件二进制对象
		// node.js 和 php 的上传唯一的不同就是 ，php 是转移一个 临时文件
		// node.js 和 其他语言（java c#） 一样操作文件流
		const stream = await ctx.getFileStream();
		//新建一个文件名
		const filename = md5(stream.filename) + path
			.extname(stream.filename)
			.toLocaleLowerCase();
		//文件生成绝对路径
		//当然这里这样市不行的，因为你还要判断一下是否存在文件路径
		const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
		//生成一个文件写入 文件流
		const writeStream = fs.createWriteStream(target);
		try {
			//异步把文件流 写入
			await awaitWriteStream(stream.pipe(writeStream));
		} catch (err) {
			//如果出现错误，关闭管道.  必须将上传的文件流消费掉，要不然浏览器响应会卡死
			await sendToWormhole(stream);
			throw err;
		}
		console.log(filename);
		//文件响应
		ctx.body = {
			errno: '0',
			data: [
				`${this.ctx.config.host}/public/uploads/${filename}`,
			]
			// url: '/public/uploads/' + filename
		};


	}

	/**
	 * 多文件上传
	 */
	async uploadMulti() {

	}


	/**
	 * base64上传图片
	 */
	async uploadByBase64() {

	}
}

module.exports = UploadController;
