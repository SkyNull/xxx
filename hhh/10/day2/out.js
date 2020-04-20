/**
 * Created by liying on 2018/9/26.
 */
/* 只要require(“”)该js，就会输出结果；
console.log(1);
function fn() {
    console.log(2);
}
fn();*/
//求任意数和====================================
let total = null;
function sum() {
    for (let i = 0; i < arguments.length; i++) {
        let cur = Number(arguments[i]);
        if (!isNaN(cur)){
            total += cur;
        }
    }
    return total;
}
function a() {
    console.log(3);
}
/*module.exports.sum = sum;
exports.sum = sum;
module.exports = {
    sum:sum,
    a:a

};*/

