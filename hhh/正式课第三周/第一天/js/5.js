/**
 * Created by liying on 2018/8/7.
 */
/*
* 匹配 18-65 的年龄段
* */
// 18-19
//20-59
//60-65
//满足三个当中任何一个都可以
var reg1 = /^(1[89]|[2-5]\d|6[0-5])$/;//谨慎必须是数字
//var reg2 = /(1[89]|[2-5]\d|6[0-5])/;//只要有就可以；没必要非得是数字
console.log(reg1.test('20'));
console.log(reg1.test('15'));
for (let i = 10; i < 70; i++) {
    console.log(i, reg1.test(i));
}
//匹配10-29
// var reg = /^[12]\d$/;
// console.log(reg.test('10'));