/*
 * @Author: your name
 * @Date: 2020-07-14 08:24:13
 * @LastEditTime: 2020-07-14 08:32:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-mall\src\network\request.js
 */ 
import axios from 'axios'
export  function request(config){//使用export是因为可能还要到处其他axios实例
  //1.创建实例，初始化实例的全局配置
  const instance=axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3',
    timeout:5000
  })
  //2.设置拦截器
  instance.interceptors.request.use(config=>{
    return config;//必须返回，不然就拦截了
  },err=>{
    console.log(err)
  })
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err)
  })
  return instance(config) //3.发送请求
}