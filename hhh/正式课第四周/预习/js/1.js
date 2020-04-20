/**
 * Created by liying on 2018/8/10.
 */
(function () {
    var
        version = "1.11.3",
        jQuery = function( selector, context ) {
            return new jQuery.fn.init( selector, context );//创建了一个init这个类的实例，也相当于创建了jQuery这个类的实例（因为在后面的时候，init.prototype=jQuery.prototype）
        };
        //jQuery是一个类，在他的原型那个上提供了很多的属性和方法，供JQ的实例调取使用
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,//当前类的原型重定向后，在即开辟的堆内存时没有constructor的，需要我们手动的增加保证他的完整性
        ...
    };
    //给JQ原型上增加extend方法，同时把JQ当做一个普通对象，给这个对象设置了一个私有的方法
    /*
    * JQ是一个类（也是一个普通对象）：函数的两种角色，JQ是一个类库提供了很多的方法，其中这些方法有两部分
    * 1.放到JQ原型上的（  jQuery.fn /jQuery.prototype），在这里面的方法是供JQ实例调取使用的
    * 2.把JQ当做一个普通的对象，在对象上设置一些私有的属性和方法，这类方法以后用的时候直接jQuery.xxx()执行即可！
    * */

    // identifier->标识符
    jQuery.extend = jQuery.fn.extend = function() {
        //extend是把一个对象中的属性和方法扩展到指定的对象上
    };
    jQuery.extend({
        isFunction: function( obj ) {

        },
        isArray:function () {

        },
        ...
    });
    //jQuery:{extend:...,isFunction:...,isArray:...}
    // jQuery.fn.extend({
    //     find:...
    // });
    //jQuery.prototype:{...,find...}
     var init = jQuery.fn.init = function (selector,context){

     };
     init.prototype = jQuery.fn;//把init当做一个类，但是这个类的原型指向了jQuery.prototype(init这个实例最后找到的也是jQuery这个类原型上的方法=>inti的实例其实也可以理解为jQuery的实例)
    window.jQuery = window.$ = jQuery;
    //$().filter;//创建一个jQuery类的实例，可以调取JQ.FN中的方法
    jQuery();
    $.isArray()//把JQ当做一个普通对象，直接使用对象上扩展的那些私有属性和方法（这些方法和实例没有关系）

        })();
//======================================================================
//这么做会陷入递归模式，死循环
let Fn = function () {
    return new Fn();
};
let f = Fn();//=>目的：不加new也能创建FN的实例
//正确的思路
let Fn1 = function () {
    return new Fn1.prototype.init();//创建 init的实例
};
Fn1.prototype.init = function () {

};
Fn1.prototype.init.prototype = Fn1.prototype;
let f1 = Fn();//=>目的：不加new也能创建FN的实例
//省略写
// let Fn1 = function () {
//     return new init();//创建 init的实例
// };
// let init = function () {
//
// };
// init.prototype = Fn.prototype;
// let f1 = Fn();//=>目的：不加new也能创建FN的实例

/*实例题*/
// let Fn2 = function () {
//     //...
// } ;
// Fn2.prototype = {
//     aa:function () {
//
//     }
// };
// Fn2().aa();
let Fn2 = function () {
    return new init();
};
Fn2.prototype = {
    aa:function () {
        console.log(0);
    }
};
let init = function () {

};
init.prototype = Fn2.prototype;
Fn2().aa();//0