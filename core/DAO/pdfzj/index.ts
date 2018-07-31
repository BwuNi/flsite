import insertBook from './insertBook'
import addMagazine from './insertMagzine'
import selectAllMagazine from './selectAllMagzine'
import selectAllBook from './seletctAllBook'
import undateBookDownload from './updateBookDownload'

import pg from 'pg'

export default (
    client: pg.Client
)=> ({
    addMagazine:addMagazine(client),
    selectAllMagazine:selectAllMagazine(client),
    insertBook:insertBook(client),
    selectAllBook:selectAllBook(client),
    updateBookDownload:undateBookDownload(client)
}) 
