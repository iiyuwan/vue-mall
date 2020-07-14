<!--
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-14 13:08:09
 * @LastEditors: Juice
 * @LastEditTime: 2020-07-14 20:03:30
--> 
<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"> </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: '',
  data() {
    return {
    };
  },
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
  },
  methods: {},
};
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  /* justify-content: space-around;均分页面 */
  justify-content: space-evenly;
}

</style>
