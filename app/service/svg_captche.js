


const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha')

class SvgCaptchaService extends Service {

    // 生成验证码
    async getCaptcha(w=85,h=38) {
        return svgCaptcha.create({
            width: w,
            height: h 
        })
    }

}

module.exports = SvgCaptchaService;