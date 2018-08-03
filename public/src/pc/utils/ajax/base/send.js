import middlewares from '../middlewares'
import axios from 'axios'

export default async function applyMiddlewares(option) {

    return new Promise((resolve,reject)=>{
        const _option = option
        const func = new Array(middlewares.length).fill(0).map((v, i) => async (_ctx) => {
            let mv = middlewares[i]
    
            let result = null

            if ((i + 1) < middlewares.length)
                result = await mv(_ctx, func[i + 1], reject)
            else
                result = await mv(_ctx, sendAjax, reject)
    
            return result
        })
    
        func[0](_option).then(res=>{
            resolve(res)
        })
    })
}



async function sendAjax(option) {

    let { type, url, data, contentType, params } = option

    if (type === 'get' || type === 'GET'||data)
        params = JSON.parse(data)

    console.log({
        method: type,
        url,
        data,
        params,
        headers: {
            'Content-Type': contentType
        }
    })

    const result = await axios({
        method: type,
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