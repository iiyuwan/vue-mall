<!--
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-14 09:10:07
 * @LastEditors: Juice
 * @LastEditTime: 2020-07-14 09:39:43
--> 
<template>
  <div>
    <Swiper> 
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img  :src="item.image"/>
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'


export default {
  name: '',
  components:{
    SwiperItem,Swiper
  },
  data() {
    return {
    };
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
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
