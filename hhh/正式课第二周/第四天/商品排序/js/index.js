/**
 * Created by liying on 2018/8/4.
 */

var data = null;
var xhr = new XMLHttpRequest();
xhr.open('get','./json/data.json',false);
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        data = JSON.parse(xhr.responseText);
    }
};
xhr.send();

var oUl = document.getElementsByClassName('ul_box')[0];
var btns = document.getElementsByClassName('ul_btn')[0].getElementsByTagName('li');

function giveHtml(data) {
    var str = '';
    for (let i = 0; i < data.length; i++) {
        str += `<li>
            <div class="img_box"><img src="${data[i].picImg}" alt=""></div>
            <div class="til">${data[i].title}</div>
            <div class="price_box public_box"><span>${data[i].price}</span></div>
            <div class="hot_box public_box"><span>${data[i].hot}</span></div>
            <div class="time_box public_box"><span>${data[i].time}</span></div>

        </li>`;

    }
    oUl.innerHTML = str;
}
giveHtml(data);

var ary = ['price','hot','time'];
var flag = 0;
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        if(flag==0){
            data.sort(function (a,b) {
                return a[ary[i]].toString().replace(/-/g,'') -  b[ary[i]].toString().replace(/-/g,'');
            });
            flag = 1;
        }else{
            data.sort(function (a,b) {
                return b[ary[i]].toString().replace(/-/g,'') -  a[ary[i]].toString().replace(/-/g,'');
            });
            flag = 0;
        }
        giveHtml(data);

    }

}

