
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
                var sql = "UPDATE USERINFO SET SEX=?,note=?,univer=?,birthday=?,grade=? WHERE userid=?";
                db.query(sql,[data.sex,data.note,data.univer,data.date,data.grade,data.userId],function(err,result){
                    if(err){
                        reject(err)
                    }else{
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