/**
 * nodemailer 发邮件测试
 */

const nodemailer = require('nodemailer');

// 开启一个 SMTP 连接池
let transporter = nodemailer.createTransport({
	host: 'smtp.163.com',
	secureConnection: true, // use SSL
	port: 465,   // SMTP 端口
	secure: true, // secure:true for port 465, secure:false for port 587
	auth: {
		user: 'louyi_vip@163.com',
		pass: 'xxx' // 邮箱需要使用授权码
	}
});

// 设置邮件内容（谁发送什么给谁）
let mailOptions = {
	from: '"xiedajian 👻" <louyi_vip@163.com>', // 发件人
	// to: 'xx1@qq.com, xx2@qq.com', // 收件人
	to: '172265972@qq.com', // 收件人
	subject: 'Hello ✔', // 主题
	text: '这是一封来自 Node.js 的测试邮件', // plain text body
	html: '<b>这是一封来自 Node.js 的测试邮件</b>', // html body
	// 下面是发送附件，不需要就注释掉
	attachments: [{
		filename: 'test.md',
		path: '../README.md'
	},
		{
			filename: 'content',
			content: '发送内容'
		}
	]
};

// 使用先前创建的传输器的 sendMail 方法传递消息对象
transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		return console.log(error);
	}
	console.log(`Message: ${info.messageId}`);
	console.log(`sent: ${info.response}`);
});
