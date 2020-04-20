<template>
    <div class="home_list">
        <h2>热门图书</h2>
        <div class="list_box">
            <Book v-for="(val,index) in list" :key="index" :item="val"></Book>
        </div>
    </div>
</template>

<script>
    import Book from './book'
    export default {
        components: {
            Book
        },
        created(){
            this.$store.dispatch('getHomeList',{name:'zf',age:9})
        },
        computed:{
            list(){
                return this.$store.state.homeList;
            }
        }

    }
</script>

<style lang="less" scoped rel="stylesheet/less" type="text/less">
    .home_list {
        padding-bottom: 2rem;

        h2 {
            height: 1rem;
            line-height: 1rem;
            padding: 0 .4rem;
            box-sizing: border-box;
            color: #ccbba7;
            font-size: .6rem;
        }
        .list_box {
            /*display: flex;*/
            overflow: hidden;
            padding-top: .2rem;
            .book_box {
                width: 50%;
                float: left;
                height: 6rem;
                /*        background: lightpink;*/
                text-align: center;
                margin-bottom: .5rem;
                img {
                    width: 95%;
                }
            }
        }

    }

</style>