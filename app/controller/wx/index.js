'use strict';

var crypto = require('crypto');
var url = require('url')
const Controller = require('egg').Controller;

class IndexController extends Controller {
    async checkSignature() {

        let { signature, timestamp, nonce, echostr } = this.ctx.query

        if(this.check(timestamp,nonce,signature,"xiedajian")){
            this.ctx.body = echostr
        }else{
            this.ctx.body = "It is not from weixin";
        }

    }

    check(timestamp, nonce, signature, token) {
        var currSign, tmp;
        tmp = [token, timestamp, nonce].sort().join("");
        currSign = crypto.createHash("sha1").update(tmp).digest("hex");
        return (currSign === signature);
    };


}

module.exports = IndexController;
