/**
 * Created by liying on 2018/8/7.
 */
var reg = /\d/;
var str = '珠峰2018珠峰2019';
reg.test(str);//true

var reg2 = /^\d/;//表示以什么开头；在[^]中的^才代表取非
var str2 = '珠峰2018珠峰2019';
var str2_1 = '2017珠峰2018珠峰2019';
console.log(reg2.test(str2));//false
console.log(reg2.test(str2_1));//true

var reg3 = /^\d{4}/;//表示匹配以四个连续数字开头的字符串
var str3 = '2018珠峰';
var str3_1 = '18珠峰';
console.log(reg3.test(str3));//true
console.log(reg3.test(str3_1));//false

var reg7 = /\\w/; // 测试结果是 转义斜杠
var reg7_1 = /\\\w/;
reg7_1.test('\\q');//true
reg7_1.test('\q');//false

var reg4 = /\d+$/;//匹配以一个数字或者多个数字结尾的字符串
var reg4_1 = /\d$/;//匹配以一个数字结尾的字符串
var reg4_2 = /\d{2}$/;//匹配以两个连续数字结尾的字符串
var str4 = '2018珠峰';
var str4_1 = '2018珠峰2019';
var str4_2 = '2018珠峰';
console.log(reg4.test(str4));//false
console.log(reg4.test(str4_1));//true
console.log(reg4.test(str4_2));//false

var reg5 = /\d/;//字符串中有没有数字
var reg5_1 = /^\d$/;//以数字开头，并且以数字结尾的一个字符

var reg6 = /^q{1,}$/;//以q开头，以q结尾的至少连续出现一次
var reg6_3 = /^q+$/;//以q开头，以q结尾的至少出现连续一次(1-多次);必须是连续的
var reg6_4 = /^q*$/;//以q开头，以q结尾的至少出现连续一次(0-多次);

/* /\d{n,}-->至少连续出现n次数字；--->这些量词元字符 都是代表连续出现的 /*/

var reg8 = /^w?/;//以w开头，w出现0-1次，后面的字符没有限制
reg8.test('qwer');//true
reg8.test('');//true

var reg8_2 = /^w*$/;//以w开头，以w结尾的至少出现连续0-多次;中间也只能是w


