<!--
 * @Author: your name
 * @Date: 2020-07-13 22:21:39
 * @LastEditTime: 2020-07-14 17:47:57
 * @LastEditors: Juice
 * @Description: In User Settings Edit
 * @FilePath: \vue-mall\src\views\category\Category.vue
--> 
<template>
  <div class="wrapper" style="height:200px;background:red">
    <ul class="content">
      <li>首部</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
<li>*</li>
      <li>*</li>
      <li>*</li>
        <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
<li>*</li>
      <li>*</li>
      <li>*</li>
        <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
<li>*</li>
      <li>*</li>
      <li>*</li>
        <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
<li>*</li>
      <li>*</li>
      <li>*</li>
        <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
<li>*</li>
      <li>*</li>
      <li>底部</li>
      
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  data() {
    return {
      bScroll:null
    };
  },
  mounted(){
    this.bScroll=new BScroll(document.querySelector('.wrapper',{//probeType侦测类型，0,1不侦测，3是滚动和惯性都侦测
      probeType:3,
      pullUpLoad:true
    }))
    this.bScroll.on('scroll',(position)=>{//监听滑动事件--position是位置
      console.log(position)
    })
    this.bScroll.on('pullingUp',()=>{
      console.log('xxxx')
    })
  },
  methods: {},
};
</script>

<style scoped>

</style>

