<p align="center">
    <img alt="captain" src="./src/global/images/logo.jpg" width="240">
</p>
<h1 align="center">🛳 Captain 👀</h1>

一个麻雀虽小，但五脏俱全的脚手架 英文名Captain 中文名“船长”
>据说业务需求能在Captain的承载下稳稳航行 （本脚手架将持续更新）

## 功能
- **初次使用[parcel](https://github.com/parcel-bundler/parcel)进行集成和打包**，不再需要烦恼于各种配置 零配置文件 支持更快的热更新 和更优化的生产构建
- **封装了数据模拟**，本地即可支持mock数据，可独立于后台开发前端需求
- **路由按需加载**，引入react-loadable 首屏加载超快
- **引入了antd**, 提供ui控件支持
- **支持typeScript**, 提供类型+接口支持 开发体验更强
- **按业务模块划分的目录结构**，开发独力功能时无需分心其它模块，做到最小耦合

## 工程结构
```
.
├── dist                     # 打包构建的文件
├── .env                     # 环境变量
├── src                      # 主程序目录
│   ├── index.html           # 程序启动和渲染入口文件
│   ├── index.tsx            # 入口文件依赖
│   ├── types                # 类型声明
│   ├── global               # 全局文件
│   │   ├── fonts            # 全局字体
│   │   ├── images           # 全局图片
│   │   ├── style            # 全局样式
│   │   ├── svgs             # svg
│   │   ├── types            # 全局通用类 接口 枚举等
│   ├── helpers              # 重要的公共方法
│   ├── components           # 公共组件
│   ├── pages                # 业务按照路由进行划分
│   │   ├── index.tsx        # 路由主文件
│   │   ├── Demo             # 路由/的页面
│   │   │   ├── index.tsx    # demo页面tsx
│   │   │   ├── index.less   # demo页面样式
│   │   └── Demo2            # 路由/demo2的页面
│   │       ├── index.tsx    # demo2页面主文件
│   │       ├── index.less   # demo2页面样式
│   ├── modes                # 业务模型
│   │   ├── store.ts         # store定义
│   │   ├── reducers.ts      # reducers
│   │   ├── index.ts         # 输出所有的业务mode 
│   │   ├── ActionModeBase.ts # 基础模型
│   │   ├── Demo             # Demo页面的模型
│   │       ├── index.ts     # 模型主文件
│   │       ├── reducers.ts  # reducers的描述
│   │       ├── type.ts      # 一些类型接口定义
│   └── mock                 # 定义mock数据的文件
│   │   ├── Demo             # 定义Demo页面的mock数据
│   │       ├── index.ts     # 主文件
```

## 使用方法

``` javascript
$ git clone https://github.com/lemondreamtobe/Captain.git
$ cd Captain
// 安装依赖
$ yarn
// 启动
$ yarn start
// 打包
$ yarn build
```

## FAQ
> 为什么使用parcel
##### 零配置打包不要太爽！你看工程目录中不再存在各种webpack文件 热更新和生产构建更快 打包优化代码体积更小（ps: 以前要做到这些事情要写各种webpack配置）

> 为什么使用typeScript
##### 类型 接口声明能让idea各种语法高亮 接口定义跳转 开发十分方便 后期维护便利 前期开发更容易避免bug

> 为什么使用redux
##### 通过业务模型mode抽离+redux能更好的组织代码和结构 dva的接入也考虑过 并没有官网说的那么容易上手 而且dva包含了react-router等一些不需要的库

> 脚手架的思考
##### 个人以为 现在的一个脚手架标准需要解决以下几个基本问题

- 定义框架 react/vue? 将决定整个工程的走向 以下3点都在此基础上进行延伸
- 路由 SPA项目最为重要的一项东西 react-router/vue-router/dva-router?
- 数据流 redux/dva/vuex? 
- 集成打包工具 webpack/gulp/pracel？负责热更新 启动/构建 编译等等 
