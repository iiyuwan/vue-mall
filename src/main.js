/*
 * @Author: your name
 * @Date: 2020-07-13 18:34:54
 * @LastEditTime: 2020-07-13 22:14:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-mall\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
