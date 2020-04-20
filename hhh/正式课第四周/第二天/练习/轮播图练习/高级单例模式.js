/**
 * Created by liying on 2018/8/17.
 */
var banner = (function () {
    data = null,
        timer = null,
        index = 0,
        oDiv = document.getElementById('div1'),
        tipBox = utils.getByClass('tip_box', oDiv)[0],
        tips = tipBox.getElementsByClassName('tip'),
        oUl = document.getElementsByClassName('img_box')[0],
        boxW = utils.css(oUl, 'width'),
        btnL = document.getElementsByClassName('leftBtn')[0],
        btnR = document.getElementsByClassName('rightBtn')[0];

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

    function autoPlay() {
        timer = window.setInterval(function () {
            play();
        }, 3000)
    }

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

    function tipClick() {
        for (let i = 0; i < tips.length; i++) {
            tips[i].onclick = function () {
                index = i - 1;
                play();
            };
        }
    }

    return {
        init: function () {
            getData();
            giveHtml();
            autoPlay();
            play();
            btnPlay();
            tipClick()
        }
    }
})();
banner.init();