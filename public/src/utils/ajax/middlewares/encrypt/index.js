import Ajax from '../../index'
import JSEncrypt from 'jsencrypt'

export default async function(option, then, err) {
    const _option = Object.assign({}, option)

    if (_option.encrypt == true) {

        try {
            const key = (await Ajax()
                .system('def')
                .get('GetPubKey')).data

            const encrypt = new JSEncrypt()

            encrypt.setPublicKey(key)

            _option.data = encrypt.encrypt(JSON.stringify(_option.data))

            return await then(_option)

        } catch (e) {
            err(e)
        }

    } else {
        return await then(_option)
    }
}