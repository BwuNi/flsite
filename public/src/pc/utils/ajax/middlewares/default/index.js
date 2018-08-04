import config from '../../config'

const {
    serverApiUrl,
    system,
    def,
} = config

export default async function(option, then, err) {

    let _option = Object.assign({},def.config ,option )

    if (_option.type &&(_option.type.toLocaleUpperCase() === 'GET'||_option.type.toLocaleUpperCase() === 'POST'))
        _option = Object.assign({}, _option, def[_option.type.toLocaleUpperCase])
    else
        return err('Method 输入错误')

    if (!_option.url) {
        if (_option.path && _option.system)
            _option.url = serverApiUrl + system[_option.system] + _option.path
        else
            return err('URL 为空')
    }

    const result = await then(_option)

    return result
}