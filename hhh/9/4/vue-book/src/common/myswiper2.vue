<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in ary" :key="index">
                <img :src="item.src" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        props:['ary'],
        mounted(){
            //在created(){}里面的方法还没有挂载到DOM上
            //需要在DOM渲染完毕之后再去初始化swiper
            //this.swiperInit();
        },
        updated(){
            this.swiperInit();
        },
        methods:{
            swiperInit(){
                //这个是用来自己定义的初始化swiper方法
                new Swiper('.swiper-container',{
                    //autoplay:true,
                    autoplay:{
                      disableOnInteraction:false
                    },
                    pagination : {
                        el:'.swiper-pagination',
                    },
                    loop:true,
                })
            }
        }
    }
</script>

<style lang="less" scoped rel="stylesheet/less" type="text/less">
    .swiper-container{
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }

</style>