import pg from 'pg'

export default (
    client: pg.Client,
) => (book: { book_id: string | null, download_url: string | null, download_password: string | null }) => new Promise((resolve: (str: string | void) => void, rej) => {
    const { book_id, download_url, download_password } = book

    if (book_id && download_url && download_password) {
        client.query(
            `update book
                set download_url = '${download_url}',download_password = '${download_password}'
                where book_id = '${book_id}'`
            , (err, res) => {
                err
                    ? resolve(err.stack)
                    : resolve('done')
            })
    } else {
        resolve('err:not exsit')
    }
})