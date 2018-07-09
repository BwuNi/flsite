import pg from 'pg'

const client = new pg.Client({
    user: 'postgres',
    host: '144.202.114.72',
    database: 'testdb',
    password: 'tempcode',
    port: '5432'
})

client.connect()

client.query('SELECT "id", "name" FROM "test";', (err, res) => {
    console.log(err ? err.stack : res.rows)
    client.end()
})

const map = {}

export default map