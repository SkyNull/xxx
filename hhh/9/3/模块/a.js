/**
 * Created by liying on 2018/9/20.
 */
let str11 = require('./b');//后缀可以省略
let obj = {
    name :'珠峰'
};
console.log(str11);
//module.exports = obj;//该方式的导出权重比较高
exports.a = '珠峰培训';
exports.obj = obj;
exports.str11 = str11;
//node的模块导出 export 导出
