export default {
    client:{
        enJson,
        deJson
    }
}



function enJson(data, option = {}) {
    return JSON.stringify(
        Object.assign({}, option, { param: JSON.stringify(data) })
    )
}

function deJson(json, res = () => {}, err = () => {}) {
    const obj = JSON.parse(json)
    if (obj) const { data, success, code, message } = obj

    if (success) {
        res(data)
    } else {
        err(message,code)
    }
}

