<!--
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-13 18:34:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-14 07:13:40
--> 
<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
     MainTabBar
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
