import pg from 'pg'


export default (
    client: pg.Client,
) => () => new Promise((resolve: (res: any[]) => void, rej) => {


    client.query(
        `SELECT "magzine_id", "url", "name" FROM "magzine";`
        , (err, res) => {
            err
                ? rej(err.stack)
                : resolve(res.rows)
        })
})