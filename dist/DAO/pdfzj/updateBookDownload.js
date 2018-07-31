"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => (book) => new Promise((resolve, rej) => {
    const { book_id, download_url, download_password } = book;
    if (book_id && download_url && download_password) {
        client.query(`update book
                set download_url = '${download_url}',download_password = '${download_password}'
                where book_id = '${book_id}'`, (err, res) => {
            err
                ? resolve(err.stack)
                : resolve('done');
        });
    }
    else {
        resolve('err:not exsit');
    }
});
//# sourceMappingURL=updateBookDownload.js.map