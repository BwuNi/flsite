"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const PgConfig_1 = __importDefault(require("./PgConfig"));
const client = new pg_1.default.Client(new PgConfig_1.default({
    user: 'postgres',
    host: '144.202.114.72',
    database: 'testdb',
    password: 'tempcode',
    port: 5432
}));
client.connect();
exports.default = client;
//# sourceMappingURL=client.js.map