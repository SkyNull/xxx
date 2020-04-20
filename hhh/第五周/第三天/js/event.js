/**
 * Created by liying on 2018/8/23.
 */
function on(ele,type,f) {//对应报社的某个频道
    //若是JS原生事件，我们需要改变绑定方式
    if (/^(my)/.test(type)){
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if (n > -1)return;
        ele[type].push(f);
    }else {
        //需要判断 type带不带 on；若是带着on,就直接用；不带的话，就补上;
     /*   if (/^(on)/.test(type)){
            ele[type] = f;
        }else{
            ele['on'+type] = f;
        }*/
        type = /^(on)/.test(type) ? type: 'on'+type;
        ele[type] = f;
       // ele.addEventListener(type,f,false);
    }


}
function fire(ele,type) {
    ele[type] = ele[type] || [];
    ele[type].forEach((item)=>{
        item && item.call(ele);
    })//item 指向fly
}
function off(ele,type,f) {
    if (/^my/.test(type)){
        ele[type] = ele[type] || [];
        var n = ele[type].indexOf(f);
        if ( n != -1){
            ele[type].splice(n,1);
        }
    }else{
     //证明原生事件
        type = /^(on)/.test(type) ? type: 'on'+type;
        ele[type] = null;
    }

}