//1.
function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);//false
console.log(f1.getY === f2.getY);//true
console.log(f1.__proto__.getY === Fn.prototype.getY);//true
console.log(f1.__proto__.getX === f2.getX);//false
console.log(f1.getX === Fn.prototype.getX);//false
console.log(f1.constructor);//Object
console.log(Fn.prototype.__proto__.constructor);//Object
f1.getX();//100
f1.__proto__.getX();//undefined
f2.getY();//200
Fn.prototype.getY();//400
f1.sum();//300
Fn.prototype.sum();//NaN
//2.============================================================================
function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
}

Foo.getName();//2  ---->普通函数执行
getName();//4
Foo().getName();//1
getName();//1
var a = new Foo.getName();//2 -----> 通过new执行   getName2()-->2
//var a = new getName2();--> getName2 = Foo.getName
console.log(a);//{}
var b = new Foo().getName();//3    xf3执行返回结果是undefined
console.log(b);//undefined
//b = foo.getName(); foo 是new Foo()得到的实例
var c = new new Foo().getName();//3
//c = new foo.getName()
console.log(c.__proto__ === Foo.getName.prototype);//true
//3.============================================================================
function Fn(){
    var a =1;
    this.a = a;
}
Fn.prototype.say = function(){
    this.a = 2;
};
Fn.prototype = new Fn;
var f1 = new Fn;

f1.__proto__.b = function (){
    this.a = 3;
};
console.log(f1.a);//1
console.log(f1.prototype);//undefined
console.log(f1.b);//f
console.log(f1.hasOwnProperty('b'));//false
console.log('b' in f1);//true
console.log(f1.constructor == Fn);//true
console.log(Fn.prototype);//Fn
console.log('say' in f1);//true

//4.============================================================================

  var F=function(){

};
Object.prototype.a=function(){
    console.log('a()')
};
Function.prototype.b=function(){
    console.log('b()')
};
var f=new F();
// f 是F类的  一个实例
// f 不是函数   F才是函数
f.a();//    a()
f.b();//    报错

F.a();//    a()
F.b();//     b()
