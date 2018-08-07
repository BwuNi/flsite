export default (Ajax) => async ({
    LOGIN,
    PASSWORD,
    VCODE,
    VCODEID
}) => {
    const data = {
        LOGIN,
        PASSWORD,
        VCODE,
        VCODEID
    }

    return (await Ajax()
        .data(data)
        .encrypt(true)
        .post('Login')).data
}