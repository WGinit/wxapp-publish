import{draw}from"terminal-img";import path from"path";import fs from"fs-extra";import QrCode from"qrcode-reader";import Jimp from"jimp";import qrcodeTerminal from"qrcode-terminal";import chalk from"chalk";import getDirName from"./getDirName.js";import sendMsg from"./sendMsg.js";import md5 from"md5-node";import SparkMD5 from"spark-md5";const __dirname=getDirName(import.meta);export default function logQrcode(r,o="login"){const n=path.join(__dirname,"qrcode.png");const i=async()=>{await draw(n,{width:50,height:50})};try{var e=Buffer.from(r.replace(/^data:image\/\w+;base64,/,""),"base64");fs.writeFileSync(n,e)}catch(r){console.log(chalk.red("保存图片失败=---请检查文佳夹写入权限",r))}r&&(sendMsg({msgtype:"markdown",markdown:{content:("login"===o?'<font color="info">小程序请求登录</font>，请相关同事注意。':'<font color="info">正在发布版本</font>, 当前为<font color="warning">全量发布</font>：')+`

             >请用微信扫下方二维码`+("login"===o?"登录":"发布")}}),e=r.replace(/^data:image\/\w+;base64,/,""),o=fs.readFileSync(n,"binary"),r=SparkMD5.hashBinary(o),sendMsg({msgtype:"image",image:{base64:e,md5:r}}));return new Promise((r,o)=>{var e,a,t;e=r,a=o,r=fs.readFileSync(n),Jimp.read(r,async function(r,o){r?(await i(),a("Jimp error "+r)):((r=new QrCode).callback=async function(r,o){r?(await i(),"function"==typeof t&&t(),a("读取微信登录码失败, 开始重新绘制二维码")):(console.log(o.result),qrcodeTerminal.generate(o.result,{small:!0}),e(o))},r.decode(o.bitmap))})})}