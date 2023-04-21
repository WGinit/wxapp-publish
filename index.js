#!/usr/bin/env node
import program from"commander";import path from"path";import fs from"fs-extra";import wxappPublish from"./src/publish.js";import getDirName from"./src/utils/getDirName.js";const __dirname=getDirName(import.meta);try{const a=fs.readJSONSync(path.resolve(__dirname,"package.json"));const b=fs.readJSONSync(path.resolve(__dirname,"wxapp-publish.config.json"));b&&(global.__wxapp_publish_config__=b),program.name(a.name).version(a.version)}catch(r){console.log("error--",r)}program.action(async()=>{await wxappPublish()}),program.parse(process.argv);