/**
 * 发邮件
 */

const Service = require('egg').Service;
const mailer = require('nodemailer');

class MailService extends Service {
	
	
	async sendMail(data) {
		const { config, logger } = this;
		
		// if (config.debug) {
		// 	return;
		// }

		// 开启一个 SMTP 连接池
		let transporter = mailer.createTransport(config.mail_opts);

		// 设置邮件内容（谁发送什么给谁）
		// let mailOptions = {
		// 	from: '"xiedajian 👻" <louyi_vip@163.com>', // 发件人
		// 	// to: 'xx1@qq.com, xx2@qq.com', // 收件人
		// 	to: '172265972@qq.com', // 收件人
		// 	subject: 'Hello ✔', // 主题
		// 	text: '这是一封来自 Node.js 的测试邮件', // plain text body
		// 	html: '<b>这是一封来自 Node.js 的测试邮件</b>', // html body
		// 	// 下面是发送附件，不需要就注释掉
		// 	attachments: [{
		// 		filename: 'test.md',
		// 		path: '../README.md'
		// 	},
		// 		{
		// 			filename: 'content',
		// 			content: '发送内容'
		// 		}
		// 	]
		// };


		// 6遍之后还是失败则放弃发送
		for (let i = 1; i < 6; i++) {
			try {
				await transporter.sendMail(data);
				logger.info('::::::::send mail success', data);
				console.log('::::::::send mail success');
				break;
			} catch (err) {
				if (i === 5) {
					logger.error('::::::::send mail finally error', err, data);
					throw new Error(err);
				}
				logger.error('::::::::send mail error', err, data);
				console.log('::::::::send mail error');
			}
		}
		
	}
	
	// 发送注册激活邮件
	async sendActiveMail(who, token, name) {
		const { config } = this;
		const from = `${config.name} <${config.mail_opts.auth.user}>`;
		const to = who;
		const subject = config.name + '帐号激活';
		const html = '<p>您好：' + name + '</p>' +
			'<p>我们收到您在' + config.name + '的注册信息，请点击下面的链接来激活帐户：</p>' +
			'<a href  = "' + config.host + '/active_account?key=' + token + '&name=' + name + '">激活链接</a>' +
			'<p>若您没有在' + config.name + '填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
			'<p>' + config.name + ' 谨上。</p>';
		
		await this.sendMail({
			from,
			to,
			subject,
			html,
		});
	}
	
	// 发送重置密码确认邮件
	async sendResetPassMail(who, token, name) {
		const { config } = this;
		const from = `${config.name} <${config.mail_opts.auth.user}>`;
		const to = who;
		const subject = config.name + '密码重置';
		const html = '<p>您好：' + name + '</p>' +
			'<p>我们收到您在' + config.name + '重置密码的请求，请在24小时内单击下面的链接来重置密码：</p>' +
			'<a href="' + config.host + '/reset_pass?key=' + token + '&name=' + name + '">重置密码链接</a>' +
			'<p>若您没有在' + config.name + '填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
			'<p>' + config.name + ' 谨上。</p>';
		
		await this.sendMail({
			from,
			to,
			subject,
			html,
		});
	}
	

	
}

module.exports = MailService;