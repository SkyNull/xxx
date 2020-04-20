<template>
    <div>
        <Til til="列表页">列表页</Til>
        <div class="list_box">
            <ListOne v-for="(val,index) in listData" :item="val" :key="index"> </ListOne>
        </div>
    </div>
</template>

<script>
    import Til from '@/common/title.vue'
    import ListOne from './listone.vue'
    import {mapState} from 'vuex'
    //引入title组件
    export default {
        components:{
            Til,ListOne
        },
        created(){
            this.$store.dispatch('getListData',{name:'zf'})
        },
        //若想用mapState 则需要我们先引入
        computed:mapState(['listData'])
        //简单介绍一下mapState这个函数的用法；
 /*       computed:{
            count(){
                return this.data;
            },
                ...mapState(['listData']),
        }*/
    }
</script>


<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .list_box{
        margin-top: 1.5rem;
        margin-bottom: 2rem;
    }

</style>