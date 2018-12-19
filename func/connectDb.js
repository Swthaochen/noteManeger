var mysql = require('mysql');
var db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'test'
});
exports.DbConnect = function(func){
    db.connect(func)
}
db.connect(function(err){
        if(err){
            console.log("mysql连接失败，错误码是：",err.code);
        }else{
            console.log("mysql连接成功!");
            var sql = "SELECT * FROM STUDENT";
            db.query(sql,function(err,result){
                if(err){
                    console.log(err);
                }else{
                    console.log('数据库操作成功！！');
                    console.log(result[0].sname,result[0].snum);
                    db.end();
                }
            })
        }
    }
)