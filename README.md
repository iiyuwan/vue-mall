<!--
 * @Descripttion: 
 * @Author: Juice
 * @Date: 2020-07-13 18:36:12
 * @LastEditors: Juice
 * @LastEditTime: 2020-07-13 19:37:29
--> 
# vue-mall
## 目录划分
--src
  --assets
    --img
    --css
      --base.css
      --normalize.css
  --common：一些公共的js文件，比如常量
  --components：公共组件，比如home和category都需要用的
    --common：本项目以及其他项目可以用的公共组件
    --content：放的当前业务相关的公共组件
  --network：网络请求相关的
  --router：路由相关
  --store：vuex相关
  --views：一些大的视图界面，比如主页、分类、我的、购物车
    --home：主页
    --category：分类
  --App.vue：根组件
  --main.js：入口文件
## 别名
1.html中，如src：'~assets/xxx'

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
