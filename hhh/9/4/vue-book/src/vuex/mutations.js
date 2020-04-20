/**
 * Created by liying on 2018/9/23.
 */
//计数功能
export const add = (state,obj)=>{
    state.count += obj;
};

//修改banner数据
export const changeBannerData = (state,obj)=>{
    state.bannerData = obj;
};

//修改列表数据
export const changeHomeList = (state,obj)=>{
  state.homeList = obj;
};
//修改列表页数据
export const changeListData = (state,obj)=>{
    //新增加的数据在前面
    state.listData = state.listData.concat(obj);
};
//删除列表数据中的某一项
export const removeListOne = (state,obj)=>{
    //目标是把state.listData中的obj这一项删除; obj就是传进来的this.item
    state.listData = state.listData.filter((item)=>{
        return item !== obj;
    })
};
//添加列表数据中的一项
export const addListOne = (state,obj)=>{
    state.listData.unshift(obj);
};
//给收藏列表添加一项
export const addCollect = (state,obj)=>{
    //判断列表中是否存在该项，若有就不再收藏；
    state.collectList.indexOf(obj)==-1? state.collectList.unshift(obj):null;
    /*state.collectList.unshift(obj);*/
};
//给收藏列表中删除一项
export const removeCollect = (state,obj)=>{
    state.collectList = state.collectList.filter((item)=>{
        return item !== obj;
    })
};
//npm  run build 打包上线生成 dist文件夹
//把package.json复制过去；直接 npm i;