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
}
function dragMove(e) {
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

}
function dragEnd() {
    // document.onmousemove = null;
    // document.onmouseup = null;
    off(document,'mousemove',this.dragMove);
    off(document,'onmouseup',this.dragEnd);

}