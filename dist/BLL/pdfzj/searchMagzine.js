"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
const cheerio_1 = __importDefault(require("cheerio"));
const DAO_1 = require("../../DAO");
const utils_1 = require("../../utils");
function default_1() {
    DAO_1.pdfzj.selectAllMagazine().then(res => {
        const rows = res.map(v => ({
            url: utils_1.trim(v.url),
            name: utils_1.trim(v.name),
            magzine_id: utils_1.trim(v.magzine_id)
        }));
        superagent_1.default.get(rows[0].url)
            .end((err, data) => {
            if (err)
                return console.log('api error');
            const $ = cheerio_1.default.load(data.text);
            const arr = $('article.excerpt header h2 a');
            const res = new Array(arr.length).fill(0).map((v, i) => ({
                title: $(arr[i]).text(),
                url: $(arr[i]).attr('href')
            }));
            console.log(res);
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=searchMagzine.js.map