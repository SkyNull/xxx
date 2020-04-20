/**
 * Created by liying on 2018/8/8.
 */
var reg = /\d+/g;
var str = 'zhufeng2018zhufeng2019';
var str_2 = str.replace(reg,',');
console.log(str_2);//zhufeng,zhufeng,
/*
* replace 支持正则，可以对整个字符串进行匹配和替换
* */
// var str2 = str.replace(reg,function () {
//     console.log(arguments);
// });
// console.log(str2);
// Arguments(3) ["2018", 7, "zhufeng2018zhufeng2019", callee: ƒ, Symbol(Symbol.iterator): ƒ]

var reg2 = /(\d+)/g;
var str = 'zhufeng2018zhufeng2019';
var str2 = str.replace(reg2,function () {
    console.log(arguments);
    //arguments
    //第一项是 大正则匹配的内容
    //第二项是 第一个分组匹配的内容
    return '-----';
    //return 的内容是要替换正则匹配到的部分；
});//这个函数是在每次要replace时，都要先执行一次
console.log(str2);

/*把字符串中的数字每一位进行+1运算*/
var reg3 = /\d/g;
var str3 = str.replace(reg3,function () {
    var temp = arguments[0];//arguments[0]是以字符串的形式给temp的
    temp = temp*1 + 1;//进行数据类型转换
    return temp;
});
//把reg3匹配到str的内容 组合起来 当做实参传给后边的回调函数；
//用回调函数的返回结果替换 正则匹配到的内容
console.log(str3);//'zhufeng3129zhufeng31210'
/*
* replace的结合正则时的用法
* 1. str.replace(reg,'---') --->用‘---’替换reg匹配到的内容
* 2. str.replace(reg,function(){}) ---->先把reg匹配的内容组合起来；当做实参传给后边的函数；再用函数的返回结果替换正则匹配到的内容
* */