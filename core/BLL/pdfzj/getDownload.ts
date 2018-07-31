import request from 'superagent'
import cheerio from 'cheerio'
import { pdfzj } from '../../DAO'
import { delay } from '../../utils'

export default async function () {
    const target = await pdfzj.selectAllBook(3000)
    // const res = await getDownloads(target)
    // const _res = res.filter(i=>(i&&i.book_id&&i.download_url&&i.download_password))

    // const result = await updatedBooks(_res)

    while (target.length) {
        const a = target.pop()
        if(!a) continue

        const res = await insertSingleBook(a)

        if(res) console.log(res)

        await delay(500)

    }



    console.log(target)
}




async function insertSingleBook(book: {
    book_id: string;
    url: string;
    title: string;
}) {
    const target = await getDownload(book)

    if (target) {
        return await updatedBook(target)
    }

    return 'none'
}


async function getDownloads(books: { book_id: string, url: string, title: string }[]) {
    const
        arr = books,
        res = []

    while (arr.length) {
        const target = arr.pop()
        if (target) {
            res.push(await getDownload(target))
        }
    }

    return res
}

function getDownload(book: { book_id: string, url: string, title: string }) {

    return new Promise((resolve: (res: {
        download_password: string | null,
        download_url: string | null,
        book_id: string | null
    } | null) => void, rej) => {
        const { url, book_id, title } = book

        let res = null
        request
            .get(url)
            .end((error, data) => {
                if (error) resolve(null)


                const $ = cheerio.load(data.text)

                const text = $('article').text();

                const download_url = (a => (a && a[0] ? a[0] : null))(text.match(/http:\/\/pan.baidu.com\/s\/([0-9]|[a-z]|[A-Z])*/))

                const download_password = ((a => (a && a[0] && a[0].length > 4 ? a[0].substr(-4, 4) : null)))(text.match(/密码[\s\S]*?([a-z]|[A-Z]|[0-9]){4}/))

                resolve({
                    book_id,
                    download_url,
                    download_password
                })
            })

    })
}

async function updatedBook(book: ({ book_id: string | null, download_url: string | null, download_password: string | null } | null)) {
    const _book = book
    let res: string | void = ''
    if (_book && _book.book_id && _book.download_url && _book.download_password) {
        res = await pdfzj.updateBookDownload(_book)
    } else {
        res = ''
    }
    return res
}

async function updatedBooks(books: ({ book_id: string | null, download_url: string | null, download_password: string | null } | null)[]) {
    const _books = books.map(i => i)
    const res = []
    while (_books.length) {
        const a = _books.pop()

        if (a && a.book_id && a.download_url && a.download_password) {

            res.push(await pdfzj.updateBookDownload(a))
        }
    }
    return res
}