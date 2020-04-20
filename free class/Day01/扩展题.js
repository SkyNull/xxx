//===第一题
var obj = {
    name:"zfpx",
    class:{
        JS:'zf',
        css:"px"
    }
};
var obj2 = obj;
var obj3 = obj2;
obj2.html = {
    html4:'html4',
    html5:'html5'
};
obj3.class = {
    JS:'zfpx'
};
var html = 'html4';
var JS = obj3.class.JS; //'zfpx'
console.log(obj2.class,
    obj3['html'][html],//obj3.html[html] --> obj3.html['html4']-->obj3.html.html4  --> 'html4'
    obj.html['html']// -->obj.html.html  --> undefined
);
JS = 'www';
console.log(obj.class.JS);//'zfpx'
obj3.class.JS = 'http';
console.log(obj3.class.JS);//'http'



 //===第二题  思考题 不要求
 for(var i = 0; i < 10; i++){
     switch (i%4 || '0'){
         case 1:
         case 3:
             i += 1;
             break;
         case 0:
         case 2:
             i += 2;
             break;
         default:
             i += 4;
     }
 }
 console.log(i);


 //===第三题
 var obj2 = {
     name: '小明',
     age: '12',
     sex: 1,
     height: '120cm',
     weight: '30kg',
     weight2: 'qw30kg'
 };
 var obj2_2 = {};
 //要求 把obj2中的属性值中//(含)// 只有数字的键值对 复制一份到obj2_2中
for(var k in obj2) {
    var val = obj2[k];
    if(typeof val == 'number'){
        obj2_2[k] = val
    }else {
        for(var i = 0; i < val.length ; i++){
            if(!isNaN(val[i])){
                //说明 val  里边有数字
                obj2_2[k] = val;
                break;
            }
        }
    }

}
// for(var k in obj2){
//     var val = obj2[k];
//     if(!isNaN(val)){
//         obj2_2[k] = val;
//     }
// }




//===第四题
var str = 'qwwrwer123sdfsf234';
var str2 = '';//'qwwrwersdfsf'
//要求  str2 的内容是 str 排除数字的剩余字符组成的新字符串
// 提示 用 for循环操作
for(var i = 0; i < str.length ; i++ ){
    if(isNaN(str[i])){
        str2 = str2 + str[i];
        // str2 += str[i];
    }
}
console.log(str2);

