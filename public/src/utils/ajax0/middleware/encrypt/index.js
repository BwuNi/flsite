import Ajax from '../../index'
import JSEncrypt from 'jsencrypt'

export default async function(config, then, err) {
    const _config = Object.assign({}, config)

    if (_config.encrypt == true) {

        try {
            const key = await Ajax()
                .system('def')
                .get('GetPubKey')

            const encrypt = new JSEncrypt()

            encrypt.setPublicKey(key)

            _config.data = encrypt.encrypt(JSON.stringify(_config.data))

            return await then(_config)

        } catch (e) {
            err(e)
        }

    } else {
        return await then(_config)
    }
}