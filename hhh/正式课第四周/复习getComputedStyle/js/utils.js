/**
 * Created by liying on 2018/8/11.
 */
var utils = (function () {
    var getCss = function (ele,attr) {
        var res = null;
        try{
            res = window.getComputedStyle(ele)[attr];
        }catch(e){
            res = ele.currentStyle[attr];
        }
        if(!isNaN(parseFloat(res))){
            res = parseFloat(res) + 'px';
        }
        return res;
    };

    var setCss = function (ele,attr,value) {
        var reg = /width|height|margin|left|right|bottom|padding|font-size|top|/i;
        if(reg.test(attr)){
            value = parseFloat(value) + 'px';
        }
        ele.style[attr] = value;
    };

    var setGroup = function (ele,obj) {
        if(Object.prototype.toString.call(obj) !== "[object Object]"){return;}
        for(var k in obj){
            if(obj.hasOwnProperty(k)){
                setCss(ele,k,obj[k]);
            }
        }
    };

    var css = function (...arg) {
        if(arg.length == 2){
            if(typeof arg[1] == 'string'){
                return getCss(arg[0],arg[1]);
            }
            setGroup(arg[0],arg[1]);
        }else{
         setCss(arg[0],arg[1],arg[2]);
        }
    };
    return {
        getcss:getCss,
        setCss,
        setGroup
    }
})();