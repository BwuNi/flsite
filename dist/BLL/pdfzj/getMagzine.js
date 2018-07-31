"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
const cheerio_1 = __importDefault(require("cheerio"));
const DAO_1 = require("../../DAO");
function default_1() {
    superagent_1.default
        .get('http://www.pdfzj.com/zazhimulu#12')
        .end(function (error, data) {
        if (error)
            return console.log('api error');
        const $ = cheerio_1.default.load(data.text);
        const arr = $('#navs > .items > .item a');
        const res = (new Array(arr.length).fill(0)).map((v, i) => ({
            name: $(arr[i]).text().replace(/(^\s*)|(\s*$)/g, ""),
            url: $(arr[i]).attr('href').replace(/(^\s*)|(\s*$)/g, "")
        })).forEach(v => {
            DAO_1.pdfzj.addMagazine(v.name, v.url)
                .then(res => { console.log(res); })
                .catch(err => { console.log(err); });
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=getMagzine.js.map