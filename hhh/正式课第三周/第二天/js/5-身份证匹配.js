/**
 * Created by liying on 2018/8/8.
 */
var str = '130481199612256024';
/*
* 需求：根据身份证号展示出这个人的基本信息
* xxx年xxx月xxx日出生的；性别：xx;
* */
//思路： 用正则 匹配捕获到要的部分；然后把要的部分拼接成 想要的结果
var reg = /^\d{6}(\d{4})(\d{2})(\d{2})\d{2}(\d)[\dX]$/;
//console.log(reg.exec(str));
var ary = str.match(reg);
var str2 = `这个人是${ary[1]}年${ary[2]}月${ary[3]}日出生的；性别${ary[4]%2 == 0 ? '女': '男'}`;
console.log(str2);
//===============================================================
//用replace方法
var str3 = str.replace(reg,function () {
    var ary = [...arguments];
    return `这个人是${ary[1]}年${ary[2]}月${ary[3]}日出生的；性别${ary[4]%2 == 0 ? '女': '男'}`;
});
console.log(str3);