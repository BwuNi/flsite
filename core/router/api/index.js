import Router from 'koa-router'
import MD from './WCKJAPI_MD'

let api = new Router()

api.use('/WCKJAPI_MD', MD.routes(), MD.allowedMethods())

export default api

