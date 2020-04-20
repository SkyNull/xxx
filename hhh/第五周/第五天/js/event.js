/**
 * Created by liying on 2018/8/26.
 */
function on(ele,type,f) {
    if (/^my/.test(type)){
        ele[type] = ele[type] || [];//把之前定义在外面的名单放到元素的私有属性上
        if (ele[type].indexOf(f) == -1){//名单中没有这个人
            ele[type].push(f);
        }
    }else {
        type = type.replace(/^(on)/g,'');
        ele.addEventListener(type,f,false);
    }

}
function fire(ele,type) {
    ele[type] = ele[type] || [];//容错判断，防止直接fire,进去循环会报错
    ele[type].forEach((item)=>{
        item && item();
    })
}
function off(ele,type,f) {
    if (/^my/.test(type)){
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if ( n !== -1){
            ele[type].splice(n,1);
        }
    }else {
        type = type.replace(/^(on)/g,'');
        ele.removeEventListener(type,f,false);
    }

}