var express = require("express");
var app = express();
var router = require("./router.js");

//设置模板引擎
app.use(express.static("./public"));
app.use(express.static("./uploads"));


app.get("/index",router.login);
app.get("/updateinfo",router.updateinfo)
app.get('/getTodayList',router.getTodayList)
app.get("/configFinish",router.configThis)
app.listen(8002);