var express = require("express");
var app = express();    //app对象一般是Express应用程序，由入口函数express()导出。
var bodyParser = require("body-parser");  //express中间件，用于处理post请求
var mysql = require("mysql");
var loginJudge = require("./loginJudge");
/*
var cookieParser = require("cookie-parser");
app.use(cookieParser("123"));   //加密
*/
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "dzz1234554321",
    port : "3306",
    database : "pagelogin"
})
connection.connect();
//这段代码表示使用系统模块queryString来处理,如果extended:true;那么使用第三方模块qs来处理
app.use(bodyParser.urlencoded({extended:false}));
//处理json
app.use(bodyParser.json());

app.post("/process_login",function(req,res){
    console.log(req.body);
    //解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    var querySql = "SELECT * FROM user WHERE id = '"+req.body.id+"' AND password = '"+req.body.passWord+"'";
    connection.query(querySql,function(err,result){
        if(err){
            console.log('SELECT ERROR',err.message);
            return;
        }
        var resSql = JSON.parse(JSON.stringify(result)); //里面转化成json,外面转换成js对象(对象[{}])
        console.log(resSql);
        if(resSql[0] == null){
            console.log("账号密码错误");
            res.send({jumpName:0});
        }else{
            console.log("账号密码正确");
            res.send({jumpName:1});
        }
    });
    /*
    //注册
    var judgending = loginJudge(req.body.id,req.body.passWord);
    if(judgending){
        var addsql = "INSERT INTO user(id,password) VALUES(?,?)"
        var addsqldata = [req.body.id,req.body.passWord]
        connection.query(addsql,addsqldata,function(err,result){
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                console.log('INSERT ID:',result); 
                return;
            }
        });
    }else{
        res.send("账号密码都能错，爬").end();
    }
    */
});

app.listen(8080);