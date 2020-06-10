<p align="center">
    <a href="http://www.maxiaoqu.com/">
        <img width="300" src="http://www.maxiaoqu.com/maxiaoqu.png">
    </a>
</p>

<h2>
    vue-typeScript-template
    <h4>这里是框架的部分使用案例</h4>
</h2>

## 主要维护人员
|人员|github账号|头像|作者博客|作者网站|联系邮箱|
|---|---|---|---|---|---|
|码小趣|[maxiaoqu](https://github.com/maxiaoqu) |  ![](https://avatars1.githubusercontent.com/u/25891598?s=60&v=4)|http://blog.maxiaoqu.com|http://www.maxiaoqu.com|maxiaoqu@gmail.com

## 文件结构
```shell
├── components.......................测试的组件
├── typescript.......................测试的ts文件
├── useComponents-1.vue..............使用组件--页面1
├── useMixins.vue....................使用Mixins方式的案例页面
├── useRequest.vue...................使用请求方式（axios）的案例页面
├── useSameMethods-1.................两个页面调取相同的方法、变量，但页面布局不同，也使用Mixins方式来解决---页面1(无自己独立的点击、交互事件)
├── useSameMethods-2.................两个页面调取相同的方法、变量，但页面布局不同，也使用Mixins方式来解决---页面2(有自己独立的点击、交互事件)
└── XXXXXXXXXX.vue...................XXX案例页面（持续更新中）
```

## 使用TS时的相关知识补充
### 作用域public，private，protected，以及不写时的区别
- 1、public：public表明该数据成员、成员函数是对所有用户开放的，所有用户都可以直接进行调用，在程序的任何其它地方访问。
- 2、private：private表示私有，私有的意思就是除了class自己之外，任何人都不可以直接使用，私有财产神圣不可侵犯嘛，即便是子女，朋友，都不可以使用。和public相反，加上这个修饰的属性和方法，只允许在自己本身这个类里访问，程序的任何其它地方都不能访问 
- 3、protected：protected对于子女、朋友来说，就是public的，可以自由使用，没有任何限制，而对于其他的外部class，protected就变成private。受保护的，位于public和private中间，加上这个修饰的属性和方法，只能在子类（extends）和同包下的程序访问，别的的地方不能访问。
- 4、default（默认）：同一包中的类可以访问，声明时没有加修饰符，认为是friendly
