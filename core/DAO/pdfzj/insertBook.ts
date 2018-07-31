import uuidv4 from 'uuid/v4'
import pg from 'pg'
import {trim} from '../../utils'


export default (
    client: pg.Client,
) => (
    title: string,
    url: string,
    magzine_id:string
) => new Promise((resolve, rej) => {

    const book = {
        title:trim(title),
        url:trim(url),
        uuid: uuidv4(),
        magzine_id:magzine_id
    }


    client.query(
        `INSERT INTO book (book_id, title, url, magzine_id)  
            VALUES ('${book.uuid}', '${book.title}', '${book.url}', '${book.magzine_id}');`
        , (err, res) => {
            err
                ? resolve(err.stack)
                : resolve(res)
        })
})