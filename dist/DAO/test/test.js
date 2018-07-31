"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => () => new Promise((resolve, rej) => {
    client.query('SELECT "id", "name" FROM "test";', (err, res) => {
        err
            ? rej(err.stack)
            : resolve(res.rows);
    });
});
//# sourceMappingURL=test.js.map