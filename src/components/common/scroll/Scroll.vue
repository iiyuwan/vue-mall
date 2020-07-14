<!--
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-14 17:54:37
 * @LastEditors: Juice
 * @LastEditTime: 2020-07-14 20:00:01
--> 
<template>
  <div class="wrapper" ref="wrapperRef">
    <div class="content">
      <slot></slot>
    </div>
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
  props:{
    probeType:{//可能有的页面并不需要侦测，因此要封装出去
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.bScroll=new BScroll(this.$refs.wrapperRef,{//建议用ref获取dom而不是通过query
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,//底部上拉事件
      click:true
    })
    this.bScroll.on('scroll',position=>{
      this.$emit('scrollPosition',position)//谁需要这个位置信息，调用该事件即可
    })
    this.bScroll.on('pullingUp',()=>{
      this.$emit('scrollPullingUp')//告诉外面我已经跳到底部了，需要加载更多
    })
  },
  methods: {
    backToTop(x,y,time=300){//返回顶部
      this.bScroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.bScroll.finishPullUp()
    },
    refreshScroll(){//刷新，使得能够重新计算高度，从而解决bug
      this.bScroll.refresh()
    }
  },
};
</script>

<style scoped>

</style>
