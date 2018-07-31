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
    mock: 'http://127.0.0.1:8081/'
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

export default async function(config, then, err) {

    let _config = Object.assign({},def.config ,config )

    if (_config.type === 'POST' || _config.type === 'GET' ||_config.type === 'get'||_config.type === 'post')
        _config = Object.assign({}, _config, def[_config.type])
    else
        return err('Method 输入错误')

    if (!_config.url) {
        if (_config.path && _config.system)
            _config.url = origin['mock'] + system[_config.system] + _config.path
        else
            return err('URL 为空')
    }

    const result = await then(_config)

    console.log(result)
    return result
}