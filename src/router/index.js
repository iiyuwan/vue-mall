/*
 * @Author: your name
 * @Date: 2020-07-13 22:10:28
 * @LastEditTime: 2020-07-14 06:50:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-mall\src\router\index.js
 */ 
import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
const Home =()=>import('views/home/Home')
const Category =()=>import('views/category/Category')
const Shopcart =()=>import('views/shopcart/Shopcart')
const Profile =()=>import('views/profile/Profile')

// import Home from 'views/home/Home.vue'  
// import Category from 'views/category/Category.vue'
// import Shopcart from 'views/shopcart/Shopcart.vue'
// import Profile from 'views/profile/Profile.vue'
const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  }
]
//解决重复点击路由而报错
const originalPush = vueRouter.prototype.push
   vueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router=new vueRouter({
  routes,
  mode:'history'
})
export default router