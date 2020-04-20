<template>
    <!--myswiper是父组件；swiper是子组件；在这里面是myswiper组件调用了swiper组件；:options是在swiper组件中人家给规定好的，；obj是父组件传给子组件的，需要在父组件中定义-->
    <swiper :options="obj">
        <!--问题： :options="obj"是实现轮播图的功能吗？？？？？？？-->
        <swiper-slide v-for="(slide, index) in ary" :key="index">
            <img :src="slide.src" alt="">
        </swiper-slide>
        <!--pagination 分页器-->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    /*
    * new Swiper({})
    * */
    export default {
        props:['ary'],
        data(){
            return{
                obj:{
                    pagination:{
                        el : '.swiper-pagination'
                    },
                    autoplay:{
                        // true,//自动播放
                        disableOnInteraction: false,
                    },
                    loop:true //实现循环无缝滚动
                },
           /*     ary:[1,2,3,4]*/
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