/**
 * Created by liying on 2018/8/12.
 */
/*第一步 从后台获取数据*/
var data = {};
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','./json/data.json',false);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
            data = utils.toJson(xhr.responseText);
        }
    };
    xhr.send();
}
getData();
/*第二步 将获取的数据渲染到页面上*/
var box = document.getElementsByClassName('box')[0];
var oUls = document.getElementsByTagName('ul');//ByTagName获取到的是元素集合，下面若是想调用数组方法，则需要将其转化成数组
var oImgs=document.getElementsByTagName('img');
function giveHtml() {
    data.forEach(function (item,index) {
        //对象的结构赋值
        var {pic,title,height} = item;
        var li = document.createElement('li');
        var str = `
            <img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034921885.gif" trueSrc = '${pic}' height="${height}" alt="">
            <p>${title}</p>
        `;
        li.innerHTML += str;
        getMinUl().appendChild(li);

    })
}
giveHtml();
/*
* 找个子最低的ul
* */
function getMinUl() {
    var ulAry = utils.toArray(oUls);
    console.log(ulAry);
    ulAry.sort(function (a,b) {
        return a.clientHeight - b.clientHeight;
    })
    return ulAry[0];
}
/*懒加载*/

function loadImg(ele) {
   if(ele.loaded)return;
    var scrT = utils.scrollT();
    var cliH = utils.clientH();
    var tarT = utils.offset(ele).t;
    if(scrT+cliH>tarT){
        var temp = document.createElement('img');
        var trueSrc = ele.getAttribute('trueSrc');//真实路径
        temp.src = trueSrc;
        temp.onload = function () {
            ele.src = trueSrc;
            ele.loaded = true;
            fadeIn(ele);
        }
        temp = null;
    }
}
function  loadAll(eles) {
    for (let i = 0; i < eles.length; i++) {
        loadImg(eles[i]);
    }
}
loadAll(oImgs);
window.onscroll = function () {
    loadAll(oImgs);
    getMore();
};
function getMore() {
    var scrT = utils.scrollT();
    var cliH = utils.clientH();
    var temp = getMinUl();
    var tarT = temp.clientHeight + utils.offset(temp).t;//最低的ul的高度+ul到body的距离
    if (scrT + cliH > tarT){
        getData();//获取新数据
        giveHtml(data);//然后加载到页面上
    }
}
function fadeIn(ele) {
    ele.style.opacity = 0;
    var temp = 0;
    var timer = window.setInterval(function () {
        temp+=0.1;
        ele.style.opacity = temp;
        if(  ele.style.opacity >=1){
            clearInterval(timer);
            ele.style.opacity = 1;
        }
    },20)
    temp = null;
}




