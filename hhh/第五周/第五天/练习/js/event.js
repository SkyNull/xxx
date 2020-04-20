/**
 * Created by liying on 2018/8/26.
 */
function on(ele,type,f) {
    if (/^my/.test(type)){
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if (n == -1){
            ele[type].push(f);
        }
    }else{
        type = type.replace(/^(on)/g,'');
        ele.addEventListener(type,f,false);
    }


}
function fire(ele,type) {
    ele[type] = ele[type] || [];
    ele[type].forEach((item,index)=>{
        item && item.call(ele);
    })
}
function off(ele,type,f) {
    if (/^my/.test(type)){
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if (n !== -1){
            ele[type].splice(n,1);
        }
    }else{
        ele.removeEventListener(type,f,false);
    }

}