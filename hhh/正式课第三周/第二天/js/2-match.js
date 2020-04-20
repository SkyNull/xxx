/**
 * Created by liying on 2018/8/8.
 */
/*
*  match 属于字符串中的方法；
* */
var reg = /\d+/;
var str = "珠峰2018珠峰2019";
console.log(str.match(reg));//2018
console.log(reg.exec(str));//2018
/*
* 当正则上边不加 全局修饰符g时；match方法和exec返回的结果是一样的
* */
var reg2 = /\d+/g;
var str2 = "珠峰2018珠峰2019";
console.log(str2.match(reg2));//["2018","2019"]
console.log(reg2.exec(str2));//2018
/*
* 当正则加上全局修饰符g时；match方法会把字符串中所有符合大正则的内容捕获到
* */
var reg3 = /(\d+)([a-z]+)/g;
var str3 = "zhufeng2018zhufeng2019";
console.log(str3.match(reg3));//["2018zhufeng"]
//有g这个修饰符时，match只能捕获到大正则捕获的内容；
console.log(reg3.exec(str3));//["2018zhufeng", "2018", "zhufeng", index: 7, input: "zhufeng2018zhufeng2019", groups: undefined]
//第一项是 大正则捕获到的内容
//第二项是 第一个小正则捕获到的内容
//第三项是 第二个小正则捕获到的内容