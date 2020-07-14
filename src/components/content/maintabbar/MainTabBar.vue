<!--
 * @Author: your name
 * @Date: 2020-07-14 07:11:25
 * @LastEditTime: 2020-07-14 07:14:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-mall\src\components\content\maintabbar\MainTabBar.vue
--> 
<template>
  <div>
       <tab-bar>
      <tab-bar-item path="/home" activeColor="deeppink"> <!--父子组件传值 如果用:就需要定义变量，直接用path就会复制给子组件-->
        <img src="~assets/img/tabbar/home.svg"
             slot="item-icon" />
        <img src="~assets/img/tabbar/home_active.svg"
             slot="item-icon-active" />
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deeppink">
        <img src="~assets/img/tabbar/category.svg"
             slot="item-icon" />
        <img src="~assets/img/tabbar/category_active.svg"
             slot="item-icon-active" />
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="deeppink">
        <img src="~assets/img/tabbar/shopcart.svg"
             slot="item-icon" />
        <img src="~assets/img/tabbar/shopcart_active.svg"
             slot="item-icon-active" />
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <img src="~assets/img/tabbar/profile.svg"
             slot="item-icon" />
        <img src="~assets/img/tabbar/profile_active.svg"
             slot="item-icon-active" />
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: '',
  data() {
    return {
    };
  },
  components:{
    TabBar,TabBarItem
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>

</style>
