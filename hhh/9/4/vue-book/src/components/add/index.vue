<template>
    <div>
        <Til til="添加页"></Til>
        <div class="inp_box">
            <label>书的名称</label>
            <input type="text" v-model="bookName">
            <label>书的信息</label>
            <input type="text" v-model="bookInfo">
            <label>书的价格</label>
            <input type="text" v-model="bookPrice">
            <label>书的封面</label>
            <input type="text" v-model="bookCover">


            <button @click="add">添加</button>
        </div>
    </div>
</template>

<script>
    import Til from '@/common/title.vue'
    export default {
        name: "index",
        data(){
            return{
                bookName:'',
                bookInfo:'',
                bookPrice:'',
                bookCover:''
            }
        },
        components:{
            Til
        },
        methods:{
            add(){
                const pic = /http/.test(this.bookCover)?this.bookCover:'https://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg';
                const obj = {
                    bookName:this.bookName,
                    bookInfo:this.bookInfo,
                    bookPrice:this.bookPrice,
                    bookCover:pic
                };
                this.bookName='';
                this.bookInfo='';
                this.bookPrice='';
                this.bookCover='';
                this.$store.commit('addListOne',obj);
                //this.$router.push('./list');//编程式导航
                this.$router.push({path:'./list',query:{q:1}});

            }
        }
    }
</script>

<style scoped lang="less" type="text/less" rel="stylesheet/less">
    .inp_box{
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        text-align: center;
        label{
            display: block;
            font-size: .8rem;
            margin-top: .2rem;
        }
        input{
            width: 80%;
            height: 1rem;
            margin-bottom: .1rem;
            border: 1px solid #ccc;
            border-radius: .2rem;
            outline: none;
            box-shadow: 2px 2px 3px #ccc;
            font-size: .4rem;
            padding-left: .2rem;
        }
        button{
            margin-top: 1rem;
            font-size: .8rem;
            width: 80%;
            height: 1.5rem;
        }
    }

</style>