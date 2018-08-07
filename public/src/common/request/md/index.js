import Ajax from '../../utils/ajax'

import getValidateCode from './getValidateCode'
import getMyMenuChilds from './getMyMenuChilds'
import getMyMenuTops from './GetMyMenuTops'
import login from './login'


export default {
    getValidateCode:getValidateCode(Ajax),
    getMyMenuChilds:getMyMenuChilds(Ajax),
    login:login(Ajax),
    getMyMenuTops:getMyMenuTops(Ajax)
}