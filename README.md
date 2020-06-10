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
    ├── APP.vue......................app.vue文件
    └── main.js......................vue相关全局配置
```

## 框架相关使用案例
[框架使用案例](./src/viewsTest)

## 使用TS时的相关知识补充
### 作用域public，private，protected，以及不写时的区别
- 1、public：public表明该数据成员、成员函数是对所有用户开放的，所有用户都可以直接进行调用，在程序的任何其它地方访问。
- 2、private：private表示私有，私有的意思就是除了class自己之外，任何人都不可以直接使用，私有财产神圣不可侵犯嘛，即便是子女，朋友，都不可以使用。和public相反，加上这个修饰的属性和方法，只允许在自己本身这个类里访问，程序的任何其它地方都不能访问 
- 3、protected：protected对于子女、朋友来说，就是public的，可以自由使用，没有任何限制，而对于其他的外部class，protected就变成private。受保护的，位于public和private中间，加上这个修饰的属性和方法，只能在子类（extends）和同包下的程序访问，别的的地方不能访问。
- 4、default（默认）：同一包中的类可以访问，声明时没有加修饰符，认为是friendly
