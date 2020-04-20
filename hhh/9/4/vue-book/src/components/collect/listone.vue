<template>
    <div class="list_one">
        <div class="pic_box">
            <img :src="item.bookCover" alt="">
        </div>
        <div class="content_box">
            <h3 class="title">{{item.bookName}}</h3>
            <p class="desc">{{item.bookInfo}}</p>
            <div class="price">{{item.bookPrice}}</div>
            <button @click="remove(item)">删除</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:['item'],
        methods:{
            remove(){
                this.$store.commit('removeCollect',this.item);
            },
        }
    }
</script>


<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .list_one{
        display: flex;
        border-bottom:1px solid #ccc ;
        .pic_box{
            flex: 4;
            img{
                width: 100%;
            }
        }
        .content_box{
            flex: 6;
            .title{
                font-size: .6rem;
            }
            .desc{
                font-size: .4rem;
            }
            .price{
                font-size: .4rem;
                color: red;
            }
            button{
                font-size: .45rem;
                background: red;
                width: 2rem;
                height: .8rem;
                border-radius: .5rem;
                border: none;
                outline: none;
                color: #fff;
                bottom: 0;
            }
        }
    }

</style>