// var name = "zhufengpeixun.com";
// var person = {
//     name: "zhufeng",
//     pro: {
//         name: "peixun",
//         getName: function() {
//             return this.name;
//         },
//         getName2: function () {
//             return function () {
//                 return this.name
//             }
//         }
//     }
// };
// console.log(person.pro.getName());//  'peixun'
// var pepole = person.pro.getName;
// person.pro.getName2()();// 'zhufengpeixun.com'
// console.log(pepole());//'zhufeng'



//2-----------------------------------------------------
var num = 2;
var obj = {
    num: 2,
    fn: (function (num) {
        num *= 2;
        this.num +=1;
        return function () {
            this.num *=3;
            ++num;
            console.log(num)
        }
    })(num)
};
var fn = obj.fn;
fn();//5
obj.fn();//6
console.log(num, obj.num);//9,6


//3、---------------------------------------------------------
// function a(xx){
//     this.x=xx;
//     return this
// };
// var x=a(5);
// var y=a(6);
// console.log(x);//6
// console.log(x.x);//undefined
// console.log(y.x);//6

//4---------------------------------------------------------
// var number = 4;
// var obj = {
//     'number': 4,
//     'tbl': (function(num){
//         this.number *= 2;
//         num+=2;
//         console.log(this.number);
//         return function(){
//             this.number *= 2;
//             num++;
//             console.log(num,this.num)
//         }
//     })(number)
// };
// var tbl = obj.tbl;
// tbl();
// obj.tbl();