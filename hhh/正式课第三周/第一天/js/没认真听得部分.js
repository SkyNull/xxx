/**
 * Created by liying on 2018/8/11.
 */
var str  ='珠峰2018珠峰2019';

console.log(str.split(''));//['珠'，...]
console.log(str.split(/[ +-]/));//空格或者+或者-
console.log(str.split(/[ -+]/));//空格到加号中间的ASCll值
console.log(str.split(/[a-za-z-]/));

//match
//匹配的正则没有全局修饰符 g时；结果是跟exec 一样的；
//加上g时只捕获大正则捕获的内容
var str='珠峰 -2018  珠峰+2019'
console.log(str.match(/(\d+)([a-z]+)/));//null


var str ='130234199001271013';//身份证

var reg =/^\d{6}(\d{4})(\d{2})(\d{2})\d{3}[\dX]$/;


//replace
var str = 'zhufeng2018zhufeng2019'
str.replace(/(\d+)([a-z]+)/g,'$1shuzi---$2zimu');//"zhufeng2018shuzi---zhufengzimu2019"
//$1 代表正则的第一个小分组（2018）；$2代表第二个小分组（zhufeng）