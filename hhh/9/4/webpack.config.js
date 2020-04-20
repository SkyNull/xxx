/**
 * Created by liying on 2018/9/22.
 */
//需要有一个遵循commonJS规范的导出文件
let path = require('path');
console.log(path.resolve('./dist'));// node 中用来处理文件路径的模块;
module.exports = {
    mode:"development",
    entry:'./src/index.js', // 打包的入口文件
    output:{
        filename:'index.js', //打包后的文件名字
        path:path.resolve('./dist') //打包后的文件输出路径，在这里必须是一个绝对路径；若没有这个文件夹，会默认的创建一个该文件夹;
    },
    module:{
        rules:[
            //符合 .js 结尾的文件，使用Babel-loader转义；其中node_modules中的文件不进行转义
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
};