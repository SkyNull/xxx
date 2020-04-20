/**
 * Created by liying on 2018/8/8.
 */
/*
* split 把字符串按照指定字符分割成数组
* */
var reg = /[,+-]/g;
var str = '珠峰，珠峰2-zhufeng+zhu';
console.log(str.split(reg));

var reg2 = /\d+/g;
var str2 = 'zhufeng123zhufeng2324zhufeng2323ee';
console.log(str2.split(reg2));//使用数字字符串 获取单词
console.log(str2.match(reg2));//使用match捕获匹配到的内容，也就是获取 数字
// var reg3 = /\D+/g;
// console.log(str2.split(reg3));
