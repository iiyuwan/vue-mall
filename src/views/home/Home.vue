<!--
 * @Author: your name
 * @Date: 2020-07-13 22:20:35
 * @LastEditTime: 2020-07-14 20:04:56
 * @LastEditors: Juice
 * @Description: In User Settings Edit
 * @FilePath: \vue-mall\src\views\home\Home.vue
--> 
<template>
  <div id="home">
    <nav-bar class="home-nav"><span slot="center">购物街</span></nav-bar>
    <Scroll class="content"
            ref="scroll"
            @scrollPosition="scrollPosition"
            @scrollPullingUp="scrollPullingUp"
            :pullUpLoad="true">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="titles"
                   class="tab-control"
                   @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </Scroll>
    <back-top @click.native="backTopClick"
              :probe-type="3"
              v-show="isShowBackTop" />
    <!--要监听原生事件就得用.native，不只是click事件-->
    <!-- back-top组件要操作scroll组件里面的bScroll对象，可以通过ref拿到 -->
    <!-- 如果不用v-bind绑定probetype的话，直接赋值就是个字符串 -->
  </div>
</template>

<script>

import HomeSwiper from './childcomponents/HomeSwiper'
import RecommendView from './childcomponents/RecommendView'
import FeatureView from './childcomponents/FeatureView'

import { getHomeMultiData, getHomeGoods } from 'network/home'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'
export default {
  name: '',
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  data () {
    return {
      banners: [],
      recommends: [],
      currentType: 'pop',
      isShowBackTop: false,
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {//流行商品
          page: 0,
          list: []
        },
        'new': {//新款商品
          page: 0,
          list: []
        },
        'sell': {//精选商品
          page: 0,
          list: []
        }
      }
    };
  },
  created () {//不要写处理逻辑，methods才是写逻辑
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /*
    监听事件相关方法
    */
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
    },
    backTopClick () {
      this.$refs.scroll.backToTop(0, 0, 500)//返回顶部
    },
    scrollPosition (position) {//拿到scroll的position后，判断什么时候该显示back-top组件
      this.isShowBackTop = (-position.y) > 1000
    },
    scrollPullingUp(){//上拉加载更多
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()//上拉一页完成
      this.$refs.scroll.refreshScroll()//需要重新计算高度
      console.log('加载更多数据')
    },
    /*
    网络请求相关方法
    */
    getHomeMultiData () {
      //获取轮播图的数据
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })    },
    getHomeGoods (type) {
      //获取商品数据
      const page = this.goods[type].page + 1//复用的时候，就能直接请求下一页了
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)//一个一个元素追加，而不是直接赋值
        this.goods[type].page += 1//页面再加一
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.content {
  overflow: hidden;
  /* height: calc(100% - 93px);注意空格，不然不生效 */
  /* margin-top:44px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
</style>
