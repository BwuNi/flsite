import md5 from 'md5'
import uuidv4 from 'uuid/v4'
import pg from 'pg'


export default (
    client: pg.Client,
) => (
    name: string,
    url: string
) => new Promise((resolve, rej) => {

    const magzine = {
        name,
        url,
        md5: md5(name),
        uuid: uuidv4()
    }


    client.query(
        `INSERT INTO magzine (magzine_id, name, md5, url)  
            VALUES ('${magzine.uuid}', '${magzine.name}', '${magzine.md5}', '${magzine.url}');`
        , (err, res) => {
            err
                ? rej(err.stack)
                : resolve(res)
        })
})