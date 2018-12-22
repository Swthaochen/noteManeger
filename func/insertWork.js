
var mysql = require('mysql');
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
                var sql = "INSERT INTO NOTELIST (userid,notetitle,noteCon,starttime,endtime,isFinish) VALUES (?,?,?,?,?,0)";
                db.query(sql,[data.userid,data.notetitle,data.noteCon,data.starttime,data.endtime],function(err,result){
                    if(err){
                        reject(err)
                    }else{
                        console.log(result)
                        resolve(200)
                        console.log('数据库操作成功！！');
                    }
                })
            }
        })
    });
}
    
exports.update = function(data){
    return test(data)
}