"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const utils_1 = require("../../utils");
exports.default = (client) => (title, url, magzine_id) => new Promise((resolve, rej) => {
    const book = {
        title: utils_1.trim(title),
        url: utils_1.trim(url),
        uuid: v4_1.default(),
        magzine_id: magzine_id
    };
    client.query(`INSERT INTO book (book_id, title, url, magzine_id)  
            VALUES ('${book.uuid}', '${book.title}', '${book.url}', '${book.magzine_id}');`, (err, res) => {
        err
            ? resolve(err.stack)
            : resolve(res);
    });
});
//# sourceMappingURL=insertBook.js.map