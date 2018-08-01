import msg  from './list'

export default function(router) {
    router.get('/GetMyMenuChilds', async (ctx) => {
        if (ctx.request.body.data) {

            ctx.body = JSON.stringify(
                msg[ctx.request.body.data]
            )
        }
    })

}