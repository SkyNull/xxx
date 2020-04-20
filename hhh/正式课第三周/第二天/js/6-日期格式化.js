/**
 * Created by liying on 2018/8/8.
 */

/*
* 通过正则 把下边的日期字符串转化成对应的汉字的年月日时间
* */
/*
* split结合正则
* replace
* match
* */
//split结合正则===================================================================
var str = '2018/8/8 14:24:34';
//var str2 = '今天是2018年8月8号 中午12点24分34秒';//目标字符串
var reg = /[/ :]/g;
//console.log(str.split(reg));
var ary = str.split(reg);
var str2 = `今天是${ary[0]}年${ary[1]}月${ary[2]}号 ${ary[3]<10?"上午":(ary[3]<14?"中午":"下午")}${ary[3]}点${ary[4]}分${ary[5]}秒`;
console.log(str2);

//replace===========================================================================
var reg1 = /(\d{4})\/(\d)\/(\d) (\d{2}):(\d{2}):(\d{2})/;
var str3 = str.replace(reg1,function (...ary) {
    console.log(ary);
    return `今天是${ary[1]}年${ary[2]*1}月${ary[3]*1}号 ${ary[4]<10?"上午":(ary[4]<14?"中午":"下午")}${ary[4]}点${ary[5]}分${ary[6]}秒`;
});
console.log(str3);
//match=================================================================================
var reg = /(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
var ary = str.match(reg);
console.log(ary);