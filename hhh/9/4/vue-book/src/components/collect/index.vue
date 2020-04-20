<template>
    <div>
        <Til til="收藏列表"></Til>
        <div class="list_box">
            <!--是父组件传给子组件的方法吗-->
            <ListOne v-for="(val,index) in list" :key="index" :item="val"></ListOne>
        </div>
    </div>
</template>

<script>
    import Til from '@/common/title.vue'
    import ListOne from './listone.vue'
    export default {
        name: "index",
        components:{
            Til,ListOne
        },
        computed:{
            list(){
                return  this.$store.state.collectList;
            }
        }
    }
</script>

<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .list_box{
        padding-top: 1.5rem;
        padding-bottom: 2rem;
    }

</style>