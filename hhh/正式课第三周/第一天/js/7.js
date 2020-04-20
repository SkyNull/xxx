/**
 * Created by liying on 2018/8/7.
 */
/*
* 捕获 ： 获取字符串中满足正则规则的 字符或字符串
* */
var reg = /\d+/;
var reg2 = /(\d+)/;
var str = '珠峰2018珠峰2019';
console.log(reg.test(str));
console.log(reg.exec(str));
console.log(reg2.exec(str));
/*
* ["2018", index: 2, input: "珠峰2018珠峰2019", groups: undefined]
* 第一项 十四整个正则捕获的内容
* 第二项开始捕获的是 每一个分组（小正则）捕获的内容；
* index  捕获的项开始的索引
* input  原始字符串
* */
var reg3 = /(\d+)([a-z])+/; //最后一次
var reg4 = /(\d+)([a-z]+)/; //总共的
var str3  = "feng2018zhu2019";
console.log(reg3.exec(str3));
console.log(reg3.exec(str4));

var reg5 = /\d+/;
var str5 = '珠峰 2018';
/*
* 正则捕获的懒惰性： 它只捕获字符串中第一个符合规则的，即使多次执行，也不会再去后边捕获；
* 解决这个问题，我们需要在正则的后边加上全局修饰符 g;
* */
/*
*
* */
RegExp.prototype.execAll = function (str) {
    var temp;
    if (!this.global){
        //若没有全局修饰符
        temp = this.exec(str) || [];
        temp.errorReason = '你没加全局修饰符';
        return temp;
    }
    let ary = [];
    temp = this.exec(str);
    while(temp){
        ary.push(temp[0]);
        temp = this.exec(str);
    }
    return ary;
};

