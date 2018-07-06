import pg from 'pg'

const { Pool, Client } = pg
const client = new Client({
    user:'postgres',
    host:'144.202.114.72',
    database:'testdb',
    password:'tempcode',
    port:'5432'
})


client.connect()

client.query('SELECT "id", "name" FROM "test";',  (err, res) => {
  console.log(err ? err.stack : res.rows)
  client.end()
})


