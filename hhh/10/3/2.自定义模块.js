let fs = require("fs");
//let  con = fs.writeFileSync("./3.txt","7654321","utf8");

//
fs.appendFile("./1.txt",JSON.stringify({a:1}),function (err) {
    console.log(err);
})