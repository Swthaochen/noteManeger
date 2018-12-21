var request = require('request');
var getUser = require('./func/getUser.js');
var up = require('./func/updateInfo.js');
var getTime = require('./func/getTodayList.js');
var config = require('./func/configFinish.js')

exports.login = function (req,resp,next) {
    console.log(req.query.js_code)
    request.get(`https://api.weixin.qq.com/sns/jscode2session?appid=wx8b2c97751050ce90&secret=f4d5df06f8c89fe937116054067d9714&js_code=${req.query.js_code}&grant_type=authorization_code`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
            var getId = JSON.parse(body).openid
            getUser.getUserInfo(getId).then((res)=>{
                console.log('返回的数据是',res)
                resp.send(res)
            })
        }
    })   
};
exports.updateinfo = function(req,resp,next){
    console.log(req.query)
    up.update(req.query)
    resp.send('成功')
};
exports.getTodayList = function(req,resp,next){
    getTime.get().then((res)=>{
        console.log(res)
        resp.send(res)
    })
};
exports.configThis = function(req,resp,next){
    console.log(req.query)
    config.get(req.query).then((res)=>{
        resp.send(res)
    })
}