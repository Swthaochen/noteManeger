
var mysql = require('mysql');
var sd = require('silly-datetime');
var test = function(data){
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
                var sql = "UPDATE notelist SET isFinish=1 WHERE (workid=?)";
                db.query(sql,[data.id],function(err,result){
                    if(err){
                        reject(err)
                    }else{
                        resolve(200)
                    }
                })
            }
        })
    });
}
    
exports.get = function(id){
    return test(id)
}