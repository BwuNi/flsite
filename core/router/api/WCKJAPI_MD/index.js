import Router from 'koa-router' 
let api = new Router()

import GetValidateCode from './GetValidateCode'
import GetPubKey from './GetPubKey'
import Login from './Login'
import GetMyMenuTops from './GetMyMenuTops'
import GetMyMenuChilds from './GetMyMenuChilds'

GetValidateCode(api)
GetPubKey(api)
Login(api)
GetMyMenuTops(api)
GetMyMenuChilds(api)



export default api