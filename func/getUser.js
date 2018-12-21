
var mysql = require('mysql');
var random = require('./random')
var test = function(openid){
    var db = mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'88888888',
        database:'node'
    });
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
                        console.log(result.length)
                        if(result.length == 0){
                            sql = "INSERT INTO USERINFO VALUES (?,?,?,?,?,?,?)";
                            let id = random.randomWord(true, 3, 32);
                            db.query(sql,[id,null,null,null,openid,null,null],function(err,result){
                                if(err){
                                    console.log(err)
                                    reject(err)
                                }else{
                                    sql = "SELECT * FROM USERINFO WHERE openid = ?"
                                    db.query(sql,[openid],function(err,result){
                                        console.log('成功',result)
                                        resolve(result)
                                        return;
                                    })
                                }
                            })
                        }else{
                            resolve(result)
                        }
                    }
                })
            }
        })
    });
}
    
exports.getUserInfo = function(openid,bb){
    return test(openid)
}