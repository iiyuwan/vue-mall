/*
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-13 19:38:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-13 23:18:06
 */ 
// const path=require('path')
// function resolve(dir){
//   return path.join(__dirname,dir)
// }
 module.exports={
  // chainWebpack:(config)=>{
  //   config.resolve.alias
  //   .set('assets',resolve('@src'))
  //   .set('common',resolve('@/common'))
  //   .set('components',resolve('@/components'))
  //   .set('network',resolve('@/network'))
  //   .set('views',resolve('@/views'))
  // }
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}