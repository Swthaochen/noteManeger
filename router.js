var request = require('request');
var getUser = require('./func/getUser.js');
exports.login = function (req,resp,next) {
    console.log(req.query.js_code)
    request.get(`https://api.weixin.qq.com/sns/jscode2session?appid=wxf7cc011d0c9c7f8c&secret=4054afc5fb7db5b32659b9f01018f6a1&js_code=${req.query.js_code}&grant_type=authorization_code`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var getId = JSON.parse(body).openid
            getUser.getUserInfo(getId).then((res)=>{
                console.log(res)
                resp.send(res)
            })
        }
    })   
};