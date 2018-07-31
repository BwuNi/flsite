import pg from 'pg'
import PgConfig from './PgConfig'


const client = new pg.Client(new PgConfig({
    user: 'postgres',
    host: '144.202.114.72',
    database: 'testdb',
    password: 'tempcode',
    port: 5432
}))


client.connect()

export default client