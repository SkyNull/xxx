/**
 * Created by liying on 2018/8/26.
 */
function dragStart(e) {
    e = e || window.event;
    var tar = e.target || e.srcElement;
    this.mx = e.pageX;
    this.my = e.pageY;
    this.startX = this.offsetLeft;
    this.startY = this.offsetTop;
    this.dragMove = dragMove.bind(this);
    this.dragEnd = dragEnd.bind(this);
    on(document,'mousemove', this.dragMove);
    on(document,'onmouseup', this.dragEnd );
    //document.onmousemove = dragMove.bind(this);
    //document.onmouseup = dragEnd.bind(this);

    fire(this,'myIndex');//在鼠标按下时触发增加层级的函数

}
function dragMove(e) {
    e.preventDefault();//阻止拖动时的默认事件
    e = e || window.event;
    let x = e.pageX - this.mx + this.startX,
        y = e.pageY - this.my + this.startY;
    this.style.left = x + 'px';
    this.style.top = y + 'px';

    if (!this.preV){
        this.preV = this.mx;
    }
    this.speed = e.pageX - this.preV;
    this.preV = e.pageX;
    fire(this,'myHit');//

}
function dragEnd() {
    // document.onmousemove = null;
    // document.onmouseup = null;
    off(document,'mousemove',this.dragMove);
    off(document,'onmouseup',this.dragEnd);
    fire(this,'myHit');//防止双击后会自动换位置
    fire(this,'myChangePos');

}