# travis-electron-vue-demo

[![Build Status](https://travis-ci.org/wuyue92tree/travis-electron-vue-demo.svg?branch=master)](https://travis-ci.org/wuyue92tree/travis-electron-vue-demo)

通过vue-cli及vue-cli-plugin-electron-builder插件创建electron-vue项目


# 安装

## vue-cli

```
# 卸载老版本vue-cli
yarn global remove vue-cli
yarn global add @vue/cli
```
## yarn
```
# 设置yarn源为淘宝镜像
yarn config set registry https://registry.npm.taobao.org

# 设置代理
yarn config set proxy  http://username:password@server:port
yarn config set https-proxy http://username:password@server:port

# 删除代理
yarn config delete proxy
yarn config delete https-proxy
```


# 我的版本
- node：10.15.3
- vue-cli：4.5.7
- yarn：1.21.1

# 初始化

## 创建项目

```
vue create <project_name>
```

## 集成electron

```
vue add vue-cli-plugin-electron-builder
```

## 更新electron

```
yarn add electron@<version> -D
```

## 本地调试
```
yarn electron:serve
```

## 本地编译
```
yarn electron:build
```

## 持续集成

通过travis设置仅允许master有提交时触发，结合electron-builder的publish实现持续集成。

# FAQ

## electorn:serve执行时出现超时告警问题

```
 INFO  Launching Electron...
Failed to fetch extension, trying 4 more times
Failed to fetch extension, trying 3 more times
Failed to fetch extension, trying 2 more times
Failed to fetch extension, trying 1 more times
Failed to fetch extension, trying 0 more times
Vue Devtools failed to install: Error: net::ERR_CONNECTION_TIMED_OUT
```
造成上述告警原因是，在启动时会对vue.js devtools进行检查，如果不存在会进行联网下载，但由于google被墙，所以必然会下载失败，便会显示这样的告警了。

> 解决方案：

在background.js中，禁用掉下载插件的逻辑，便可以解决这一问题

```
// Install Vue Devtools
try {
  // await installExtension(VUEJS_DEVTOOLS)
  console.log('Skip download Vue Devtools.')
} catch (e) {
  console.error('Vue Devtools failed to install:', e.toString())
}
```