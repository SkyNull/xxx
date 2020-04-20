/**
 * Created by liying on 2018/9/9.
 */
//原生PROMISE接收一个函数作为参数；
function Promise(fn) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;//先设置传给成功函数的初始值
    self.reason = undefined;//再设置传给失败函数的初始值
    self.resCallbacks = [];//存储成功的回调
    self.rejCallbacks = [];//存储失败的回调

    function resolve(value) {
        //做判断是因为只有是pending状态才去执行相关操作；
        if (self.status === 'pending'){
            self.status = 'resolved';
            self.value = value;
            self.resCallbacks.forEach((item)=>{
                item && item( self.value);
            })
        }
    }
    function reject(reason) {
        //做判断是因为只有是pending状态才去执行相关操作；
        if (self.status === 'pending'){
            self.status = 'rejected';
            self.reason = reason;
            self.rejCallbacks.forEach((item)=>{
                item && item( self.reason);
            })
        }
    }
    try {
        fn(resolve,reject);
    }catch (e){
        reject(e);
    }

}
Promise.prototype.then = function (res,rej) {
  //根据什么属性决定res还是rej执行--->status
    let self = this;
    if (self.status == 'resolved'){
        //res(self.value);
        return new Promise(function (value) {
            let val = res(value);
            res2(val);
        })
    }
    if (self.status == 'rejected'){
        //rej(self.reason);
        return new Promise(function (reason) {
            let val = rej(reason);
            res2(val);
        })
    }
    if (self.status == 'pending'){
        //处理异步函数
       /* self.resCallbacks.push(res);//把成功的回调函数存储到self.resCallbacks
        self.rejCallbacks.push(rej);//把失败的回调函数存储到self.rejCallbacks*/
       self.resCallbacks.push(function (value) {
           return new Promise(function (res2,rej2) {
               let val = res(self.value);
               res2(val);
           })
       });
        self.rejCallbacks.push(function (value) {
            return new Promise(function (res2,rej2) {
                let val = rej(self.value);
                res2(val);
            })
        })

    }
};
let p2 = new Promise(function (res,rej) {
    setTimeout(function () {
        res(123);//定时器(匿名函数)this指向window
    },1000);
    console.log(1234);
}).then((data)=>{
    console.log(data);
},(rej)=>{
    console.log(rej);
});
//console.log(p2.status);//结果是resolved
