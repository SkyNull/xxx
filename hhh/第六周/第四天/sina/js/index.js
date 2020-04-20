/**
 * Created by liying on 2018/9/2.
 */

var $oul = $('.ulBox'),
    $listBox = $('.listBox'),
    $tabs = $('.tab_box ul li'),
    $tabContents = $('.tab_content'),
    $bake = $('.bake'),
    $tabBox = $('.tab_box');

/*
*1. 实现轮播图
* */
function bannerFn() {
    var mySwiper = new Swiper('.bannerBox',{
        autoplay:{
            //用户操作后仍然自动播放
            disableOnInteraction:true,
            //一个图在当前窗口的停留时间
            delay:2000,
            autoplay:false
        },
        loop:true,//是否无缝滚动
        pagination: {//分页器
            el: '.pageBox',//分页器的盒子
            type: 'fraction',//分页器的类型 1/2
            currentClass:'currentPage',//变动数字的盒子的类名
            totalClass:'totalPage' //总共数字盒子的类名
            //type: 'fraction',
            //type : 'progressbar',
            //type : 'custom',
        },
    });
}


/*2.获取数据*/
/*$.ajax({
    type:'get',//请求方式 get在url中显示参数，有缓存；而Post路径后不带参数，没有缓存
    url:'./data/banner.json',//请求路径
    data:{t:123,q:234},//发送给后台的数据
    success:function (d) {
        //请求成功后执行的数据
        console.log(d);
        giveHtml(d);//请求成功数据之后执行，把数据放在页面上
    },
    error:function () {
        //请求失败后执行的数据
    }
});*/
/*
* 3.将数据放在页面上
* */
function giveHtml(data) {
    data = data || [];
    var str = '';//用来存储拼接好的结构字符串
    data.forEach((item)=>{
        str += `  <li class="swiper-slide">
                        <a href="#">
                            <img src="${item.img}" alt="">
                            <div>${item.title}</div>
                        </a>
                    </li>`
    });
    $oul.html(str);
/*    bannerFn();*/
}
/*执行顺序
* 先请求数据 再把数据放到页面上 再执行轮播图函数
* */

//promise写法(以后常用)
var p = new Promise(function (resolve,reject) {
    $.ajax({
        type:'get',
        url:'./data/banner.json',
        success:function (data) {
            resolve(data)
        },
        error:function (res) {
            reject(res)
        }
    })
});
p.then(function (data) {
    //第一个参数 是promise执行的成功函数
    //console.log(data);//成功之后调取的数据
    giveHtml(data);
    return data;
},function () {
    //第二个参数 是promise执行的失败函数
}).then(function (data) {
    bannerFn();
},function () {

});
/*//第二种写法
p.then(function (data) {
    //第一个参数 是promise执行的成功函数
    //console.log(data);//成功之后调取的数据
    giveHtml(data);
    return data;
}).then(function (data) {
    bannerFn();
}).catch(function (res) {
    console.log(res);
});*/
/*
* 新闻列表部分
* */
var listPro = new Promise(function (resolve,reject) {
    $.ajax({
        type:'get',
        url:'./data/list.json',
        data:{t:1},
        success:function (data) {
            resolve(data);
        },
        error:function (res) {
            reject(res);
        }
    })
});
/*把数据放到列表中*/
function giveListHtml(data) {
    data = data || [];
    var str = '';
    data.forEach((item)=>{
        switch (item.type){
            case 0:
                str += `<a href="##">    <div class="text_box">
                  <p>${item.title}</p>
                  <div class="comment_box">
                        <em class="">
                            <span class="">${item.num}</span>
                            <span class="icon_com"></span>
                        </em>
                    </div>
                </div></a>`;
                break;
            case 1:
                str += `<a href="#">
                <div class="img_box">
                    <img src='${item.img}' alt="">
                </div>
                <div class="text_box">
                    <p>${item.title}</p>
                    <div class="comment_box">
                        <em class="">
                            <span class="">${item.num}</span>
                            <span class="icon_com"></span>
                        </em>
                    </div>
                </div>
            </a>`;
                break;
            case 3:
                str += ` <a href="#" class="three_box">
                <p>${item.title}</p>
                <!--为什么加一个div就好了??-->
                <div class="three_pic">
                    <div>
                        <img src="${item.img[0]}" alt="">
                    </div>
                    <div>
                     <img src="${item.img[1]}" alt="">
                    </div>
                    <div>
                     <img src="${item.img[2]}" alt="">
                    </div>
                      </div>
                <div class="comment_box">
                    <em class="">
                        <span class="">${item.num}</span>
                        <span class="icon_com"></span>
                    </em>
                </div>
            </a>`;
                break;
        }
    });
    $listBox.html(str);
}
listPro.then(function (data) {
    giveListHtml(data)
});

/*
* 三个 tab绑定点击事件
* */
$tabs.on('touchend',function () {
    console.log(this);//this指的是当前点击的元素
    $(this).addClass('current').siblings().removeClass('current');
    $tabContents.eq($(this).index()).show().siblings('.tab_content').hide();
});
// 实现导航条效果
/*求scrollTop,就必须写scroll的监听事件*/
window.onscroll = function () {
    var offsetT = $tabBox.offset().top,
    WT = document.documentElement.scrollTop || document.body.scrollTop;
    if (  WT >= offsetT){
        $bake.show();
    }else{
        $bake.hide();
    }
};

/*
设置控制台字体 样式
* console.log('%c设置控制台字体样式','font-size:41px';color:red;)
* */
