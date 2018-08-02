import login from '../../../../utils/login'

export default function(router) {
    router.post('/Login', async (ctx) => {
        let data = ctx.request.body,
            id = login.login(data.LOGIN)
        ctx.body = JSON.stringify({
            success: true,
            data: id
        })
    })
}