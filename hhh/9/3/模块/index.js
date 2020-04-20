/**
 * Created by liying on 2018/9/20.
 */
let obj1 = require('./a.js'); //node 引入模块 的方式
//引入第三方模块的时候，我们不需要加路径；直接引用即可；
//先在同级路径下的node_modules中查找模块，若是没找到，再去上级路径的node_module中查找，直到找到根路径；
let jq = require('jquery');
//let react = require('react');

let qqq = require('./b.js').str;
console.log(obj1,jq,qqq);
