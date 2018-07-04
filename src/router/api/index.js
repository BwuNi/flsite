import Router from 'koa-router'
import getMyMenuTops from './GetMyMenuTops'

let api = new Router()

getMyMenuTops(api)

export default api

