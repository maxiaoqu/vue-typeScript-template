<p align="center">
    <a href="http://www.maxiaoqu.com/">
        <img width="300" src="http://www.maxiaoqu.com/maxiaoqu.png">
    </a>
</p>

<h2>
    vue-typeScript-template
    <h4>基于vue-cli、typeScript搭建的项目，开箱即用 ，只加载常用的配置，用更少的代码，做更多的东西，喜欢的话，欢迎star</h4>
</h2>

## 主要维护人员
|人员|github账号|头像|作者博客|作者网站|联系邮箱|
|---|---|---|---|---|---|
|码小趣|[maxiaoqu](https://github.com/maxiaoqu) |  ![](https://avatars1.githubusercontent.com/u/25891598?s=60&v=4)|http://blog.maxiaoqu.com|http://www.maxiaoqu.com|maxiaoqu@gmail.com

## 主要维护分支
|人员|分支类型|分支说明|
|---|---|---|
|master|[主分支框架](https://github.com/maxiaoqu/vue-typeScript-template/tree/master) | 该分支是代码最全的分支之一
|template|[基础模版框架](https://github.com/maxiaoqu/vue-typeScript-template/tree/template) | 该分支是初始化代码框架，只有最基础的配置，无其他乱七八糟的东西
|template-oidc|[oidc模版框架](https://github.com/maxiaoqu/vue-typeScript-template/tree/template-oidc) | 该分支是oidc的最基础版本（oidc为单点登录）


## 使用技术
- vue
- vuex
- vue-router
- vue-cli3
- ES5\ES6
- TypeScript
- Less\css

## 安装
```
npm install
```

## 运行
```
npm run serve
```

## 打包
```
npm run build
```

## 打包分析
```
npm run build --report
```

## 检查
```
npm run lint
```

## 文件结构
```shell
├── public...........................打包所需静态资源
└── src..............................存放文件的相关目录
    ├── api..........................所有接口请求存放地
    ├── assets.......................静态资源文件
        ├── fonts....................字体图标库
        ├── img......................图片文件
        └── style....................样式文件
    ├── components...................项目通用组件库
    ├── dictionary...................项目静态字典库
    ├── environment..................环境变量
    ├── frameSkeleton ...............框架骨架(框架上的通用页面)
    ├── plugin.......................第三方插件
    ├── router.......................路由文件
    ├── store........................vuex状态管理
    ├── utils........................工具包、方法包
    ├── view.........................vue页面文件
        └── components...............项目业务组件库
    ├── viewTest.....................相关使用案例、规范书写【参考：框架相关使用案例】
    ├── APP.vue......................app.vue文件
    └── main.js......................vue相关全局配置
```

## 框架使用说明
- 1、viewTest是使用案例和使用规范，不需要的时候可以进行删除即可（同时删除src/router/routerPath.ts和src/router/index.ts里的testRoutes参数）

## 框架相关使用案例
[框架使用案例](./src/viewsTest)
