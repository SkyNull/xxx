<template>
    <div>
        <MyTil til="首页">首页</MyTil>
        <Banner></Banner>
        <List></List>
    </div>
</template>

<script>
    import MyTil from '@/common/title.vue'; //引入title组件
    import Banner from './banner.vue'
    import List from './list.vue'
    export default {
        components:{
            MyTil,
            Banner,
            List
        }
    }
</script>

<style scoped>

</style>