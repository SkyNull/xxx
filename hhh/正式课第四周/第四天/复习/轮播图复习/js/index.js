/**
 * Created by liying on 2018/8/18.
 */
function Banner(id, url) {
    this.url = url;
    this.box = document.getElementById(id);//获取最外层的盒子
    this.oUl = utils.getByClass('ul_box', this.box)[0];//获取ul条
    this.data = null;//存储数据
    this.boxW = utils.css(this.box, 'width');//存储盒子的宽度
    this.index = 0;//要显示的图片的索引
    this.n = 0;//存储图片的个数
    this.leftBtn = utils.getByClass('leftBtn', this.box)[0];
    this.rightBtn = utils.getByClass('rightBtn', this.box)[0];
    this.timer = null;//存放定时器的
    this.tipBox = utils.getByClass('tip_box', this.box)[0];
    this.tips = this.tipBox.getElementsByClassName('tip');
}
Banner.prototype = {
    construct: Banner,
    getData: function () {
        //获取数据
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.url);
        xhr.onreadystatechange = ()=> {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                this.data = utils.toJson(xhr.responseText);
                this.cb();
            }
        };
        xhr.send();
    },
    giveHtml: function () {
        var str = '';
        var tipStr = ``;
        this.data.push(this.data[0]);
        this.data.forEach((item, ind)=> {
            var {pic, title} = item;
            str += `  <li>
            <img src="${pic}" alt="">
            <p>${title}</p>
        </li>`;
            if (ind < this.data.length - 1) {
                tipStr += `<li class="tip ${ind == 0 ? 'current' : null}">${ind + 1}</li>`;
            }
        });
        utils.css(this.oUl, {
            width: this.boxW * this.data.length, position: 'relative'
        });
        this.n = this.data.length;
        this.oUl.innerHTML = str;
        this.tipBox.innerHTML = tipStr;
    },
    play: function () {
        //让图片滚动 控制oul的left值
        if (utils.css(this.oUl, 'left') % this.boxW != 0)return;
        this.index++;
        if (this.index >= this.n) {
            utils.css(this.oUl, 'left', 0);
            this.index = 1;
        }
        if (this.index == -1) {
            utils.css(this.oUl, 'left', -this.boxW * (this.n - 1));
            this.index = this.n - 2;
        }
        [...this.tips].forEach((item)=> {
            utils.removeClass(item, 'current');
        })
        if (this.index == this.n - 1) {
            utils.addClass(this.tips[0], 'current');
        } else {
            utils.addClass(this.tips[this.index], 'current');
        }

        myAnimate(this.oUl, 1000, {left: -this.boxW * this.index}, 'easeOut');
    },
    autoPlay: function () {
        this.timer = setInterval(()=> {
            this.play();
        }, 3000);
    },
    eventFn: function () {
        //做事件绑定
        this.box.onmouseenter = ()=> {
            utils.css(this.leftBtn, 'display', 'block');
            utils.css(this.rightBtn, 'display', 'block');
            clearInterval(this.timer);
        };
        this.box.onmouseleave = ()=> {
            utils.css(this.leftBtn, 'display', 'none');
            utils.css(this.rightBtn, 'display', 'none');
            this.autoPlay();
        };
        this.rightBtn.onclick = ()=> {
            clearInterval(this.timer);
            this.play();
        };
        this.leftBtn.onclick = ()=> {
            if (utils.css(this.oUl, 'left') % this.boxW != 0)return;
            clearInterval(this.timer);
            this.index -= 2;
            this.play();
        }
    },
    
    tipClick: function () {
        for (let i = 0; i < this.tips.length; i++) {
            this.tips[i].onclick = ()=> {
                if (this.index == this.n - 1) {
                    utils.css(this.oUl, 'left', 0);
                }
                this.index = i - 1;
                this.play();
            }

        }
    },
    cb:function () {
        this.giveHtml();
        this.autoPlay();
        this.eventFn();
        this.tipClick();
    },
    init: function () {
        this.getData();
    }
};
var banner = new Banner('box', 'data.json');
banner.init();
// banner.getData();
// banner.giveHtml();
// banner.autoPlay();
// banner.eventFn();
// banner.tipClick();
// console.log(banner.data);

