"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => () => new Promise((resolve, rej) => {
    client.query(`SELECT "magzine_id", "url", "name" FROM "magzine";`, (err, res) => {
        err
            ? rej(err.stack)
            : resolve(res.rows);
    });
});
//# sourceMappingURL=selectAllMagzine.js.map