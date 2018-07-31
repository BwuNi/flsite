import pg from 'pg'

export default (
    client: pg.Client
) => () => new Promise((resolve, rej) => {

    client.query('SELECT "id", "name" FROM "test";', (err, res) => {
        err
            ? rej(err.stack)
            : resolve(res.rows)

        // client.end()
    })
})