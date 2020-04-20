/**
 * Created by liying on 2018/8/12.
 */
/*
* 第一步 从后台获取数据
* */
var data = null;//用来存储从后台获取的数据

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
console.log(data);
/*
* 第二步 把数据渲染到页面上
* */
var box = document.getElementsByClassName('box')[0];
var oUls = document.getElementsByTagName('ul');
var ulAry = utils.toArray(oUls);//把类数组转换成数组
var oImgs = document.getElementsByTagName('img');
function giveHtml() {
    data.forEach(function (item,index) {
        /*
         * index 是从0到length;
         * 要知道每一条数据放到哪个ul里面；我们在这里，我们把前四条一次放到四个ul中，后四条再依次放入四个Ul中，这样依次循环下去就可以了
         * index%4
         * */
        var {pic,title,height} = item;//这个是对象的结构赋值 item{id:0,pic:'http',title:'ttt'}
        var str = ` <li>
            <img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034921885.gif" height="${height}" trueSrc="${pic}"  alt="">
            <p>${title}</p>
        </li>`;
        //这个是挨个排的，会导致长短差距越来越大
       // var n = index%4; // 0 1 2 3
      //  oUls[n].innerHTML += str;
        //排的方式，换成每次给最矮的那个ul排数据
        getMinUl().innerHTML += str;
        //获取最矮的那个ul,给这个ul传数据
    });
}
function giveHtml2() {
    data.forEach(function (item,index) {
        /*
         * index 是从0到length;
         * 要知道每一条数据放到哪个ul里面；我们在这里，我们把前四条一次放到四个ul中，后四条再依次放入四个Ul中，这样依次循环下去就可以了
         * index%4
         * */
        var {pic,title,height} = item;//这个是对象的结构赋值 item{id:0,pic:'http',title:'ttt'}
        var li = document.createElement('li');//防止闪屏
        var str = ` 
            <img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034921885.gif" height="${height}" trueSrc="${pic}"  alt="">
            <p>${title}</p>
        <`;
        li.innerHTML = str;
        var temp = getMinUl();
        temp.appendChild(li);

    });
}
/*
* 找个子最低的ul minUl
* */
function getMinUl() {
    ulAry.sort((a,b)=>{
        return a.clientHeight - b.clientHeight;
    });
    return ulAry[0];
}
giveHtml2(data);
/*
* 接下来实现图片的懒加载；我们需要先把真实路径存放到img自定义属性上，给img一个默认的小图
* */
/*
* 实现图片的懒加载(在图片懒加载之前图片都是默认图)
* */
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
//监听页面的滚动事件
window.onscroll = function () {
    loadAll(oImgs);
    getMore();
};
/*
* 当页面滑动至最低的ul底部漏出来时，加载新数据
* */
function getMore() {
    var scrT = utils.scrollT();
    var cliH = utils.clientH();
    var temp = getMinUl();
    var tarT = temp.clientHeight + utils.offset(temp).t;//最低的ul的高度+ul到body的距离
    if (scrT + cliH > tarT){
        getData();//获取新数据
        giveHtml2(data);//然后加载到页面上
    }
}
/*
* 让元素渐显
* */
function fadeIn(ele) {
    ele.style.opacity = 0;
    var opa = 0.1;
    var timer = setInterval(function () {
        opa += 0.1;
        ele.style.opacity = opa;
        if(opa >= 1){
            clearInterval(timer);
            ele.style.opacity = 1;
        }
    },20)
}