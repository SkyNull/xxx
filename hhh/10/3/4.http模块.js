//只要修改了server文件，那么一定要重新跑一下
let http = require("http");//导入模块
// console.log(http);
let server = http.createServer(function(req,res){
    //req:请求  res:响应；
    //当客户端请求时，会把当前请求信息放入到这个函数的第一个参数中，
   // console.log(req);
    //console.log(req.url);
    //当客户端访问时，会执行
    //只要客户端请求一次，当前函数就执行一次；
  console.log("哇");
  //1.结束当前的请求
  //res.end();
  //2.把后端整理的数据返给客户端；把数据响应给客户端；且参数是一个字符串或者buffer  res.end("123");
  //设置响应头：
  //setHeader:需要两个参数；
  res.setHeader('Content-Type','text/plain;charset=utf-8;');
  res.end("欧奈你");
});
//端口号： 0-65535 http默认端口号会走80； https会默认走443；
//让当前的服务器监听8000端口；当客户端访问8000端口时，会触发当前server的回调函数
server.listen(8000,function(){
    //listen的回调函数 ；当服务启动成功就会马上执行；只执行一次；
    //如果端口号启动不成功，该函数不执行；
    //如果端口启动成功，那么服务就可以监听到请求；
    console.log("端口启动成功");
});