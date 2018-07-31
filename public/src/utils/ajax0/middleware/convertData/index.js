function enJson(data, option = {}) {
    return JSON.stringify(
        Object.assign({}, option, { param: JSON.stringify(data) })
    )
}

function deJson(json, err = () => {}) {
    if(typeof json !== 'string') return json

    const obj = JSON.parse(json)
    if (obj) {
        const { data, success, code, message } = obj

        if (success) {
            return data
        } else {
            console.error(`error: ${err.code}  ${err.message}`)
            err(message)
        }
    }

    return obj
}

export default async function(config, then, err) {

    const _config = Object.assign({}, config)
    const option = {
        token: _config.token,
        encrypt: _config.encrypt,
    }

    _config.data = enJson(_config.data, option)

    const result = await then(_config)
    console.log(deJson(result))
    return deJson(result)
}