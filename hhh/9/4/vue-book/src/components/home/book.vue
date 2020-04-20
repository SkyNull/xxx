<template>

        <div class="book_box">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
        </div>

</template>

<script>
    export default {
        //book组件的父组件是 list.vue
        props:['item']

    }
</script>

<style scoped lang="less">

</style>