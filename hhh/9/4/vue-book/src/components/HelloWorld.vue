<template>
  <div class="hello">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
 <!--加这个keep-alive 是为了保证第一次进来加载数据-->
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from '@/common/tabs.vue';
export default {
  name: 'HelloWorld',
  components:{
    //注册本组件 要使用的组件
    //在vue中声明的组件只引入不用导出
    Tab
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

