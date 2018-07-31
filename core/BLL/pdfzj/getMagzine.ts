import request from 'superagent'
import cheerio from 'cheerio'
import { pdfzj } from '../../DAO'

export default function () {
    request
        .get('http://www.pdfzj.com/zazhimulu#12')
        // .buffer(true)
        .end(function (error, data) {
            if (error) return console.log('api error')

            const $ = cheerio.load(data.text)

            const arr = $('#navs > .items > .item a');



            const res = (new Array(arr.length).fill(0)).map((v, i) => ({
                name: $(arr[i]).text().replace(/(^\s*)|(\s*$)/g, ""),
                url: $(arr[i]).attr('href').replace(/(^\s*)|(\s*$)/g, "")
            })).forEach(v => {
                pdfzj.addMagazine(v.name, v.url)
                    .then(res => { console.log(res) })
                    .catch(err => { console.log(err) })
            })

        });
}
