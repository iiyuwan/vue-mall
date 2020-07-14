<!--
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-14 10:09:12
 * @LastEditors: Juice
 * @LastEditTime: 2020-07-14 14:01:33
--> 
<template>
  <div class="tab-control">
    <!--文字不一样的tab就不需要用插槽了，navbar就很多不一样用的插槽-->
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="itemClick(index)" :class="{active:index===currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      currentIndex:1
    };
  },
  props:{
    titles:{//各tab名字
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
  },
  methods: {
    itemClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  },
};
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 14px;
  background: #fff;
  position: sticky;
  top:44px;
  z-index: 9;
}
.tab-control-item{
  flex:1;
  height: 35px;
  line-height: 35px;
}
.tab-control-item span{
  padding:0px 10px 5px 10px ;
}
.active{
 color: var(--color-high-text);
}
.active span{
 border-bottom: 4px solid var(--color-tint);
}
</style>
