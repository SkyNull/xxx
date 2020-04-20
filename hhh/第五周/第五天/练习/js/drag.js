/**
 * Created by liying on 2018/8/26.
 */
function dragStart(e) {
    e = e || window.event;
    var tar = e.target || e.srcElement;

    this.startX = this.offsetLeft;
    this.startY = this.offsetTop;
    this.mx = e.pageX;
    this.my = e.pageY;
    this.dragMove = dragMove.bind(this);
    this.dragEnd = dragEnd.bind(this);
    // document.onmousemove = dragMove.bind(this);
    // document.onmouseup = dragEnd.bind(this);
    on(document,'mousemove',this.dragMove);
    on(document,'mouseup',this.dragEnd);
}
function dragMove(e) {
    var x = e.pageX - this.mx + this.startX,
        y = e.pageY - this.my + this.startY;
    this.style.left = x + 'px';
    this.style.top = y + 'px';
}
function dragEnd() {
    // document.onmousemove = null;
    // document.onmouseup = null;
    off(document,'mousemove',this.dragMove);
    off(document,'mouseup',this.dragEnd);
}