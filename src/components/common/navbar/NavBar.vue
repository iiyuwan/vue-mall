<!--
 * @Author: your name
 * @Date: 2020-07-14 08:06:14
 * @LastEditTime: 2020-07-14 08:20:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-mall\src\components\common\navbar\NavBar.vue
--> 
<template>
  <div class="nav-bar"><!--因为可以多处使用，这里就不能用id-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
}
.left,.right{
  width:60px;
}
.center{/* 其他宽度确定了，用这个就是剩余的 */
  flex:1
}
</style>

