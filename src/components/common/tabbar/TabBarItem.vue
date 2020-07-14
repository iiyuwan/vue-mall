<!--
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-13 21:20:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-14 07:05:39
--> 
<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-show="!isActive"><slot name="item-icon" ></slot></div>
      <div v-show="isActive"> <slot name="item-icon-active" ></slot></div>
      <div :style="activeStyle"><!--slot会被替换，所以不能在上面绑定动态类-->
      <slot name="item-name"></slot><!--由于js里变量没法直接给css用，因此不能绑定动态class，而是绑定动态style-->
      </div>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    };
  },
  props:{
    path:{
      type:String,
      required:true
    },
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed: {
    isActive(){//判断激活哪一个页面
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  watch: {
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)//or replace
      console.log(this.$route)
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  /* 均等分布 */
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.activeColor{
  color: red;
}
</style>
