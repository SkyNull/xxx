/**
 * Created by liying on 2018/9/8.
 */
/*
* 1.创建一个ajax函数
* */
function ajax(options) {
    //初始化数据
    let {
        type = 'get',
        url,
        async = true,
        data = {},
        dataType = 'json',
        cache = false,
        success,
        error
    }=options;
    /*处理data数据*/
    let str = ``;
    for (let k in data){
        if (data.hasOwnProperty(k)){
            str += `${k}=${data[k]}&`;
        }
    }
    str = str.slice(0,str.length-1);
    /*判断type类型*/
    let isGet = null;
    if (/get|head|delete/.test(type)){
        isGet = true;
    }else if (/post|put/.test(type)){
        isGet = false;
    }
/*
* 2.创建一个ajax
* */
let xhr = new XMLHttpRequest();
if (isGet){
    if (url.indexOf('?') === -1){
        url += `?${str}`;
    }else {
        url.replace(/&$/,'');
        url += `&${str}`;
    }
    if (cache == false){
        url += `&_=${Math.random()}`;
    }
}


xhr.open(type,url,async);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}|304/.test(xhr.readyState)){
        switch (dataType){
            case 'json':
                let data = JSON.parse(xhr.response);
                success && success(data);
                break;
            case 'xml':
                success && success(xhr.responseXML);
                break;
            default:
                success && success(xhr.response);
        }
    }else if (xhr.readyState == 4 && /^[45]\d{2}/.test(xhr.readyState)){
        error && error(xhr.response);
    }
};
if (!isGet){
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
}
xhr.send(str);
}
ajax({
    type:'get',
    url:'1.json',
    data:{name:'zhufeng',age:8},
    success:function (d) {
        console.log(d);
    },
    error:function (res) {
        console.log(res);
    }
});