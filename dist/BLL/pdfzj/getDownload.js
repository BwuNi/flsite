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
        const target = yield DAO_1.pdfzj.selectAllBook(3000);
        while (target.length) {
            const a = target.pop();
            if (!a)
                continue;
            const res = yield insertSingleBook(a);
            if (res)
                console.log(res);
            yield utils_1.delay(500);
        }
        console.log(target);
    });
}
exports.default = default_1;
function insertSingleBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        const target = yield getDownload(book);
        if (target) {
            return yield updatedBook(target);
        }
        return 'none';
    });
}
function getDownloads(books) {
    return __awaiter(this, void 0, void 0, function* () {
        const arr = books, res = [];
        while (arr.length) {
            const target = arr.pop();
            if (target) {
                res.push(yield getDownload(target));
            }
        }
        return res;
    });
}
function getDownload(book) {
    return new Promise((resolve, rej) => {
        const { url, book_id, title } = book;
        let res = null;
        superagent_1.default
            .get(url)
            .end((error, data) => {
            if (error)
                resolve(null);
            const $ = cheerio_1.default.load(data.text);
            const text = $('article').text();
            const download_url = (a => (a && a[0] ? a[0] : null))(text.match(/http:\/\/pan.baidu.com\/s\/([0-9]|[a-z]|[A-Z])*/));
            const download_password = ((a => (a && a[0] && a[0].length > 4 ? a[0].substr(-4, 4) : null)))(text.match(/密码[\s\S]*?([a-z]|[A-Z]|[0-9]){4}/));
            resolve({
                book_id,
                download_url,
                download_password
            });
        });
    });
}
function updatedBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        const _book = book;
        let res = '';
        if (_book && _book.book_id && _book.download_url && _book.download_password) {
            res = yield DAO_1.pdfzj.updateBookDownload(_book);
        }
        else {
            res = '';
        }
        return res;
    });
}
function updatedBooks(books) {
    return __awaiter(this, void 0, void 0, function* () {
        const _books = books.map(i => i);
        const res = [];
        while (_books.length) {
            const a = _books.pop();
            if (a && a.book_id && a.download_url && a.download_password) {
                res.push(yield DAO_1.pdfzj.updateBookDownload(a));
            }
        }
        return res;
    });
}
//# sourceMappingURL=getDownload.js.map