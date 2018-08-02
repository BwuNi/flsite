import createKey from './createKey' 

export default function (router) {
    router.get('/GetPubKey', async (ctx) => {
        const key = await createKey()
        ctx.body = JSON.stringify({
          success:true,
          data:key
        })
    })
}