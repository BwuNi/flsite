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
    config : {
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
    },
    get: {
        type: 'GET',
        dataType: null,
        contentType: 'text/plain'
    },
    post: {
        type: "POST",
        dataType: 'json',
        contentType: 'application/json',
    }
}

export default async function(option, then, err) {

    let _option = Object.assign({},def.config ,option )

    if (_option.type === 'POST' || _option.type === 'GET' ||_option.type === 'get'||_option.type === 'post')
        _option = Object.assign({}, _option, def[_option.type])
    else
        return err('Method 输入错误')

    if (!_option.url) {
        if (_option.path && _option.system)
            _option.url = origin['mock'] + system[_option.system] + _option.path
        else
            return err('URL 为空')
    }

    const result = await then(_option)

    console.log(result)
    return result
}