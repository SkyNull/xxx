    var a = {
        x:1
    };
    var b = a;
    b.c = a = {y:1};//点的优先级 高于 等号的 优先级
    console.log(a, b);//{y:1} {x:1;c:{y:1}}


    //----------------------------

    var n=13;
    function fn(n){
       alert(n);//13
       var n=14;
       alert(n);//14
    }
    fn(n);
//----------------------------
    var n = 13;
    function fn(){
         n = 15;
         console.log(n);//15
    }
    fn();
    alert(n);//15
//----------------------------
    var n = 10;
    function outer(){
        var n = 15;
        function inner(){
            function center(){
                alert(n);//15
            }
            center();
        }
        inner();
    }
    outer();
    //-------------------------
    var n = 10;
    function outer(){
        function inner(){
            function center(){
                alert(n);//undefined
            }
            center();
        }
        inner();
        var n = 15;
    }
    outer();
    //-------------------------
//-----------------------------
    var n=0;
    function a(){
        var n=10;
        function b(){
            n++;
            alert(n);//11
        }
        b();
    }
    a();
    alert(n);//0
//--------------------------
    console.log(num,str);//undefined,undefined
    var num = 18;
    var str = "lily";
    function fn2(){
        console.log(str,num);//"lily",undefined
        num = 19;
        str = "candy";
        var num = 14;
        console.log(str,num);//"candy",14
    }
    fn2();
    console.log(str,num);// "candy",18
//----------------------------------------------------
    alert(a);//undefined
    console.log("a" in window);//true
    if(!("a" in window)){
        var a = 10;
    }
    alert(a);//undefined

    console.log(fn3);//undefined
    //在条件语句中 function  只声明不定义
    if(9==8){
        function fn3(){
            alert(2);
        }
    }

    [] == ![];//--->true
    //首先 ![]属于布尔类型,boolean[]是true,取反得false;

    //    ---------------------------------
    f = function(){return true};
    g = function(){return false};
    (function (){
        console.log(g);//undefined
        if(g()&&[]==![]){
            f = function f(){return false};
            function g(){return true};
        }
    })();
    alert(f());//true
    alert(g());//false
