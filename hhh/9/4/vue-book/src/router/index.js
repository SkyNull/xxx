import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/index.vue'  //默认值只找index.vue
import List from '@/components/list'  //绝对路径
import Collect from '@/components/collect'
import Add from '@/components/add'
/*import是es6的导入方式； require是node的导入方式*/
Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    children:[
      {
        path:'/home',
        component:Home
      },
      {
        path:'/list',
        component:List
      },
      {
        path:'/collect',
        component:Collect
      },
      {
        path:'/add',
        component:Add
      }
    ]
  },

];
export default new Router({
  mode:'hash',
  linkActiveClass:'current',
  routes
})
