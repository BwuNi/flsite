import path from 'path'

import Koa from 'koa'
import cors from 'koa2-cors' // 跨域
import bodyParser from 'koa-bodyparser' // 解析请求
import koaLogger from 'koa-logger' // 日志
import convert from 'koa-convert' // 适配 koa1 的中间件
import file from 'koa-static' // 处理静态资源

import router from './router'

const app = new Koa();

// 跨域配置
app.use(cors())

// 配置控制台日志中间件
app.use(convert(koaLogger()))

// 配置ctx.body解析中间件
app.use(bodyParser())


// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

// 加载静态资源
app.use(file(path.resolve(__dirname, '../static'), { extensions: ['html'] }));

module.exports = app