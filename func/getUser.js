
var mysql = require('mysql');
var db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'node'
});
var test = function(openid){
    console.log(openid)
    return new Promise((resolve,reject)=>{
        db.connect(function(err){
            if(err){
                reject("mysql连接失败，错误码是："+err.code)
            }else{
                var sql = "SELECT * FROM USERINFO WHERE openid = ?";
                db.query(sql,[openid],function(err,result){
                    if(err){
                        reject(err)
                    }else{
                        console.log('数据库操作成功！！');
                        db.end();
                        resolve(result)
                    }
                })
            }
        })
    });
}
    
exports.getUserInfo = function(openid,bb){
    console.log(openid,bb)
    return test(openid)
}