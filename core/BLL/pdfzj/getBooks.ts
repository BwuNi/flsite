import request from 'superagent'
import cheerio from 'cheerio'
import { pdfzj } from '../../DAO'
import { trim } from '../../utils'

export default async function () {

    const magzines = await pdfzj.selectAllMagazine().then(
        res => (
            res.map(
                v => ({
                    url: trim(v.url),
                    name: trim(v.name),
                    magzine_id: trim(v.magzine_id)
                }
                )
            )
        )
    )

    const task = await list(magzines)

    insertBook(task)
}


async function list(rows: {
    url: string,
    name: string,
    magzine_id: string
}[]) {
    const
        _row = rows,
        task: { title: string, url: string, magzine_id: string }[] = []


    while (_row.length) {
        let target = _row.pop()
        if (target) {
            let row = target
            let result = await( new Promise((resolve, rej) => {
                setTimeout(() => {
                    request
                        .get(row.url)
                        .end((err, data) => {
                            if (err) rej((console.log('api error'), 'api error'))

                            const $ = cheerio.load(data.text)

                            const arr = $('article.excerpt header h2 a')

                            const res = new Array(arr.length).fill(0).map((v, i) => ({
                                title: $(arr[i]).text(),
                                url: $(arr[i]).attr('href'),
                                magzine_id: row.magzine_id
                            }))

                            res.forEach(v => {
                                task.push(v)
                            })

                            resolve(res[0]?res[0].title:'ok')
                        })
                }, 100);
            }))
            console.log(result)
        }
    }

    return task
}


async function insertBook(task: { title: string, url: string, magzine_id: string }[]) {
    while (task.length) {
        const item = task.pop()
        let res: any = ''

        if (item) {
            res = await pdfzj.insertBook(item.title, item.url, item.magzine_id)
        }

        console.log(res)
    }

}
