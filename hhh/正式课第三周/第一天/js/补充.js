/**
 * Created by liying on 2018/8/11.
 */
/* 新增加的知识点*/
var reg = /(\w)(\w)\1/;// 1代表匹配到第一个分组的字符
console.log(reg.test('qwq'));//true
console.log(reg.test('qww'));//false

var reg = /(\w)(\w)\2/;// 2代表匹配到第二个分组的字符
console.log(reg.test('qwq'));//false
console.log(reg.test('qww'));//true
/*
 获取一个字符串中出现次数最多的字母及其次数
 * */
var str ='abdeabhcvbdsbbdcgnggsv';
/*
 思路1：循环这个字符串；把字符串放到一个对象中，；每次放的时候先去查看有没有这个属性，如果有的话就给这个属性值+1；
 若没有，赋初始值为1；
 * */
R
var obj={};
for (let i = 0; i < str.length; i++) {
    if(obj.hasOwnProperty(str[i])){
        obj[str[i]]++;
    }else{
        obj[str[i]]=1;
    }
}
/*

/*
* 需求;求字符串中出现次数最多的字符
* */
//思路： 把字符串变成aaabbbbzzz这种形式----->/(\w)\1+/
//使用split分割成数组，给数组排序；结合成 字符串
// 然后利用正则结合replace方法求出最大值
var str = 'aasssaasasdfgg';
function mySort(str) {
    var str2 = str.split('').sort(function (a,b) {
        return a.localeCompare(b);
    }).join('');
    var arr = str2.match(/(\w)\1*/g);
    arr.sort((a,b)=>{return b.length - a.length});
    console.log(arr, arr[0],arr[0][0],arr[0].length);
}
console.log(mySort(str));

//新知识点=================================
var str = '12345633';//12,345,633
var reg = /(\d)(?=(\d{3})+$)/g;// ?=: 正向预查
str.replace(reg,'$1,');
/*
* 千分符
* */
//replace
str.replace(/(\d+)([a-z]+)/g,'$2---$1');
//$1 代表正则的第一个小分组（2018）；$2代表第二个小分组（zhufeng）



//需求：求字符串中出现次数最多的字符


