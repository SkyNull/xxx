<template>
    <div class="til">
        <h2>{{til}}</h2>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        props:['til']
    }
</script>

<style scoped lang="less" rel="stylesheet/less" type="text/less">
    .til{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 1.5rem;
        background: lightblue;
        text-align: center;
        line-height: 1.5rem;
        z-index: 300;
    }

</style>