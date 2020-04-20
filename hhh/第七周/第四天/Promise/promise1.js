/**
 * Created by liying on 2018/9/10.
 */
function Promise(fn) {
    let self = this;//this是指向实例的
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.resCallbacks = [];
    self.rejCallbacks = [];
    function resolve(value) {
        if (self.status === 'pending'){
            self.status = 'resolved';
            self.value = value;
            self.resCallbacks.forEach((item)=>{
                item && item(self.value);
            })
        }
    }
    function reject(reason) {
        if (self.status === 'pending'){
            self.status = 'rejected';
            self.reason = reason;
            self.rejCallbacks.forEach((item)=>{
                item && item(self.reason);
            })
        }
    }
    try {
        fn(resolve,reject);
    }catch (e){
        reject(e);
    }
    Promise.prototype.then = function (res,rej) {
        let self = this;
        if (self.status == 'resolved'){
            res(self.value);
        }
        if (self.status == 'rejected'){
            rej(self.reason);
        }
        if (self.status == 'pending'){
            self.resCallbacks.push(res);
            self.rejCallbacks.push(rej);
        }
    }
}
let p2 = new Promise(function (res,rej) {
    setTimeout(()=> {
        res(123);
    },30);
    console.log('1234');
}).then((data)=>{
    console.log(data);
},(rej)=>{
    console.log(rej);
})
