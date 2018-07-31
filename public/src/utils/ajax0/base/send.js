import { convertData, encrypt, def } from '../middleware'
import axios from 'axios'

export default async function applyMiddlewares(params) {

    let ctx = params
    console.log(ctx)
    let err = () => {}

    const middlewares = [def, encrypt, convertData]
    const func = new Array(middlewares.length).fill(0).map((v, i) => async (_ctx) => {
        let mv = middlewares[i]
        console.log(_ctx)
        if ((i + 1) < middlewares.length)
            ctx = await mv(_ctx, func[i + 1], err)
        else
            ctx = await mv(_ctx, sendAjax, err)

        console.log(ctx)
        return ctx
    })

    await func[0](ctx)
    return ctx
}



async function sendAjax(config) {

    let { type, url, data, contentType, params } = config

    if (type === 'get' || type === 'GET')
        params = data

    console.log({
        methods: type,
        url,
        data,
        params,
        headers: {
            'Content-Type': contentType
        }
    })

    const result = await axios({
        methods: type,
        url,
        data,
        params,
        headers: {
            'Content-Type': contentType
        }
    })

    console.log(result)
    return result.data
}