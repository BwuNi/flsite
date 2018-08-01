function enJson(data, param = {}) {
    return JSON.stringify({
        param:JSON.stringify(Object.assign({
            data:data
        },param))
    }
    )
}

function deJson(json, err = () => {}) {
    if (typeof json !== 'string') return json

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

export default async function(option, then, err) {

    const _option = Object.assign({}, option)
    const param = {
        token: _option.token,
        encrypt: _option.encrypt,
    }

    _option.data = _option.data === null ? null : enJson(_option.data, param)

    const result = await then(_option)
    console.log(deJson(result))
    return deJson(result)
}