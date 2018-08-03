import config_pro from '../../../../../common/config/index'
import config_dev from './config'

let serverApiUrl = ''

if (process.env.NODE_ENV == 'production') {
    serverApiUrl = config_pro.serverApiUrl
} else {
    serverApiUrl = config_dec.serverApiUrl
}

const system = {
    roadproperty: 'WCKJAPI_RoadProperty/',
    operation: 'WCKJAPI_Operation/',
    emergency: 'WCKJAPI_Emergency/',
    def: 'WCKJAPI_MD/',
    securityrisk: 'WCKJAPI_SecurityRisk/',
    finance: 'WCKJAPI_Finance/',
    assets: 'WCKJAPI_Assets/'
}

const origin = {
    prod: 'http://139.129.237.60:1102/',
    dev: 'http://127.0.0.1:1102/',
    mock: 'http://127.0.0.1:8080/api/'
}

const def = {
    config: {
        type: 'GET',
        path: ' ',
        async: true,
        data: '',
        system: 'def',
        encrypt: false
    },
    GET: {
        type: 'GET',
        dataType: null,
        contentType: 'text/plain'
    },
    POST: {
        type: "POST",
        dataType: 'json',
        contentType: 'application/json',
    }
}

export default {
    serverApiUrl,
    system,
    def,
}