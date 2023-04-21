<p align="center"><a href="http://lihua1108.com" target="_blank" rel="noopener noreferrer"><img width="100" src="https://github.com/WGinit/Assets/blob/master/project/images/wxapp-publish/logo.png" alt="wxapp-publish"></a></p>

# wxapp-publish

微信小程序自动化发布版本辅助工具

## Demo

## 安装

```
npm i wxapp-publish -g
```

## 使用

打开终端, 键入：

```javascript
wxapp-publish
```

在终端就会如图所示：

 ![图片](https://github.com/WGinit/Assets/blob/master/project/images/wxapp-publish/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-04-21%20101303.png)

后续根据提示进行接下来的操作即可！

## 结合群机器人WebHook

提供生成消息通过群机器人发送到消息群，在项目根目录新建wxapp-publish.config.json配置文件，配置字段说明：

| 字段 | 类型 | 默认 | 说明 |
|:---: | :---: | :---:| :---: |
| webHook | string | - | 机器人 webHook 地址 |
| timeout | number | 100000 | 超时时间，ms |
| pageDebug | boolean | false | 页面console.log 日志 |
| puppeteerLunchOptions | object | - | puppeteer 启动配置, 更多配置参考 [puppeteer官方配置](https://puppeteer.devjs.cn/api) |
| > headless | boolean | true | 是否以”无头”的模式运行 chrome, 也就是不显示 UI， 默认为 true |

示例：

```json
{
    "webHook": "https://****",
    "timeout": 100000,
    "pageDebug": false,
    "puppeteerLunchOptions": {
        "headless": true
    }
}
```

## 结合Jenkins

待补充
