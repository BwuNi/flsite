"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
const cheerio_1 = __importDefault(require("cheerio"));
const DAO_1 = require("../../DAO");
const utils_1 = require("../../utils");
function default_1() {
    return __awaiter(this, void 0, void 0, function* () {
        const magzines = yield DAO_1.pdfzj.selectAllMagazine().then(res => (res.map(v => ({
            url: utils_1.trim(v.url),
            name: utils_1.trim(v.name),
            magzine_id: utils_1.trim(v.magzine_id)
        }))));
        const task = yield list(magzines);
        insertBook(task);
    });
}
exports.default = default_1;
function list(rows) {
    return __awaiter(this, void 0, void 0, function* () {
        const _row = rows, task = [];
        while (_row.length) {
            let target = _row.pop();
            if (target) {
                let row = target;
                let result = yield (new Promise((resolve, rej) => {
                    setTimeout(() => {
                        superagent_1.default
                            .get(row.url)
                            .end((err, data) => {
                            if (err)
                                rej((console.log('api error'), 'api error'));
                            const $ = cheerio_1.default.load(data.text);
                            const arr = $('article.excerpt header h2 a');
                            const res = new Array(arr.length).fill(0).map((v, i) => ({
                                title: $(arr[i]).text(),
                                url: $(arr[i]).attr('href'),
                                magzine_id: row.magzine_id
                            }));
                            res.forEach(v => {
                                task.push(v);
                            });
                            resolve(res[0] ? res[0].title : 'ok');
                        });
                    }, 100);
                }));
                console.log(result);
            }
        }
        return task;
    });
}
function insertBook(task) {
    return __awaiter(this, void 0, void 0, function* () {
        while (task.length) {
            const item = task.pop();
            let res = '';
            if (item) {
                res = yield DAO_1.pdfzj.insertBook(item.title, item.url, item.magzine_id);
            }
            console.log(res);
        }
    });
}
//# sourceMappingURL=getBooks.js.map