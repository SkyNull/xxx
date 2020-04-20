<template>
    <div class="banner">
        <!--arr是通过computed依赖关系得来的-->
   <!--     <mySwiper :ary="arr" v-if="arr.length"></mySwiper>-->
        <mySwiper :ary="arr"></mySwiper>
       <!-- {{this.$store.state.count}}-->
    </div>
</template>

<script>
   // import mySwiper from '@/common/myswiper.vue'
    import mySwiper from '@/common/myswiper2.vue'
    import axios from 'axios'
    //第三方插件是不用写.vue的
    //引入之后需要注册 components:{}
    export default {
    /*    data(){
            return{
                //因为在computed中return了，所以这里就不用return了
             /!*   arr:[]*!/
            }
        },*/
        components:{
            mySwiper
        },
        created(){
            this.$store.dispatch('getBannerData');
            //接口请求一般放在created(){}
        /*    axios.get('/bannerlist').then((data)=>{
                console.log(data);
                this.arr = data.data;
                //一般请求都写在actions里面
            })*/
        },
        computed:{
            arr(){
                return this.$store.state.bannerData;
            }
        }
    }
</script>


<style lang="less" scoped rel="stylesheet/less" type="text/less">
    .banner{
        height: 4rem;
        background: lightgray;
        margin-top: 1.5rem;
    }

</style>