import pg from 'pg'


export default (
    client: pg.Client,
) => (num: number | void) => new Promise((resolve: (res: { book_id: string, url: string, title: string }[]) => void, rej) => {


    client.query(
        `SELECT "book_id", "url", "title" FROM "book" ${num ? `LIMIT ${num}` : ''};`
        , (err, res) => {
            err
                ? rej(err.stack)
                : resolve(res.rows)
        })
})