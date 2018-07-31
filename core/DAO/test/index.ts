import pg from 'pg'

import test from './test'

export default (
    client: pg.Client
)=> ({
    test:test(client)
}) 
