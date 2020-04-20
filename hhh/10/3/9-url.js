let  http = require("http");
let  fs = require("fs");
let url = require("url");
http.createServer(function(req,res){
    //url.parse ：用来处理路径的；
    console.log(req.url);
}).listen(8888,function () {
    console.log("端口启动成功");
});