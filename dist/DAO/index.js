"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const client = new pg_1.default.Client({
    user: 'postgres',
    host: '144.202.114.72',
    database: 'testdb',
    password: 'tempcode',
    port: '5432'
});
client.connect();
client.query('SELECT "id", "name" FROM "test";', (err, res) => {
    console.log(err ? err.stack : res.rows);
    client.end();
});
const map = {};
exports.default = map;
//# sourceMappingURL=index.js.map