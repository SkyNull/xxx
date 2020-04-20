/**
 * Created by liying on 2018/8/15.
 */
var data = null;
var timer = null;
var index = 0;
var oDiv = document.getElementById('div1');
var tipBox = utils.getByClass('tip_box', oDiv)[0];//表示在oDiv下的所有tip_box
//var tipBox = document.getElementsByClassName('tip_box')[0];
var tips = tipBox.getElementsByClassName('tip');
var oUl = document.getElementsByClassName('img_box')[0];
var boxW = utils.css(oUl, 'width');
var btnL = document.getElementsByClassName('leftBtn')[0];
var btnR = document.getElementsByClassName('rightBtn')[0];
/*获取数据*/
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'data.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
            data = utils.toJson(xhr.responseText);
        }
    };
    xhr.send();
}
getData();
console.log(data);
/*将数据渲染到页面上*/
function giveHtml() {
    var str = ``;
    var tipStr = ``;
    data.push(data[0]);
    data.forEach(function (item, index) {
        var {pic, title} = item;
        str += `    <li>
            <img src="${pic}" alt="">
            <p>${title}</p>
        </li>`;
        if (index < data.length - 1) {//0 1 2 3
            tipStr += `<li class="tip ${index == 0 ? 'current' : ''}">${index + 1}</li>`
        }
    });
    oUl.innerHTML = str;
    tipBox.innerHTML = tipStr;

    n = data.length;
    oUl.style.position = 'relative';
    oUl.style.width = boxW * n + 'px';
}
giveHtml();
/*设置定时器*/
function autoPlay() {
    timer = window.setInterval(function () {
        play();
    }, 3000)
}
autoPlay();
/*实现自动播放效果*/
function play() {
    if (utils.getCss(oUl, 'left') % boxW != 0) return;
    index++;
    //判断左右边界
    if (index == -1) {
        utils.css(oUl, 'left', -boxW * (n - 1));
        index = n - 2;
    }
    if (index == n) {
        utils.css(oUl, 'left', 0);
        index = 1;
    }


    [...tips].forEach((item, index)=> {
        utils.removeClass(item, 'current');
    });
    if (index == n - 1) {
        utils.addClass(tips[0], 'current');
    } else {
        utils.addClass(tips[index], 'current');
    }
    var curL = -boxW * index;
    myAnimate(oUl, 1000, {left: curL});
}
play();
function btnPlay() {
    btnR.onclick = function () {
        clearInterval(timer);
        play();
    };
    btnL.onclick = function () {
        if (utils.css(oUl, 'left') % boxW != 0) return;
        clearInterval(timer);
        index -= 2;
        play();
    };
    oDiv.onmouseenter = function () {
        clearInterval(timer);
        utils.css(btnL, 'display', 'block');
        utils.css(btnR, 'display', 'block');
    };
    oDiv.onmouseleave = function () {
        utils.css(btnL, 'display', 'none');
        utils.css(btnR, 'display', 'none');
        autoPlay();
    }
}
btnPlay();
function tipClick() {
    for (let i = 0; i < tips.length; i++) {
        tips[i].onclick = function () {
            index = i - 1;
            play();
        };
    }
}
tipClick();