<!--
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-13 20:03:55
 * @LastEditors: Juice
 * @LastEditTime: 2020-07-13 21:20:30
--> 
<template>
     <div id="tab-bar">
       <slot></slot>
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
#tab-bar{
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}

</style>
