<template>
    <div class="btn_box">
        <router-link to="/home">
            <i class="iconfont icon-home"> <span>首页</span></i>
        </router-link>
        <router-link to="/list">
            <i class="iconfont icon-listalt"><span>列表页</span></i>
        </router-link>
        <router-link to="collect">
            <i class="iconfont icon-heart"><span>收藏页</span></i>
        </router-link>
        <router-link to="add">
            <i class="iconfont icon-add"><span>添加</span></i>
        </router-link>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scoped属性 让当前这些样式表只对当前组件起作用-->
<style lang="less" scoped rel="stylesheet/less" type="text/less">
    /*使用less 需要安装less和less-loader 两个包*/
    .btn_box{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2rem;
        /*平均分*/
        display: flex;
        border-top: 1px solid #ccc;
        background: #fff;
        a{
            flex: 1;
            font-size: 0.5rem;
            text-decoration: none;
            text-align: center;
            color: yellowgreen;
            padding-top: .5rem;
            box-sizing: border-box;
            i{
                display: block;
                font-size: .5rem;
            }
            span{
                display: block;
            }
        }
        a.current{
            color: red;
        }
    }
</style>