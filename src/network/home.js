/*
 * @Descripttion: 对home的一些请求
 * @Author: Juice
 * @Date: 2020-07-14 08:32:45
 * @LastEditors: Juice
 * @LastEditTime: 2020-07-14 11:21:50
 */ 
import {request} from './request'
export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
