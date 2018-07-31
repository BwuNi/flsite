"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => (num) => new Promise((resolve, rej) => {
    client.query(`SELECT "book_id", "url", "title" FROM "book" ${num ? `LIMIT ${num}` : ''};`, (err, res) => {
        err
            ? rej(err.stack)
            : resolve(res.rows);
    });
});
//# sourceMappingURL=seletctAllBook.js.map