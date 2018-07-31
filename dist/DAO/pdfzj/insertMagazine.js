"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
const v4_1 = __importDefault(require("uuid/v4"));
exports.default = (client) => (name, url) => new Promise((resolve, rej) => {
    const magzine = {
        name,
        url,
        md5: md5_1.default(name),
        uuid: v4_1.default()
    };
    client.query(`INSERT INTO magzine (magzine_id, name, md5, url)  
            VALUES ('${magzine.uuid}', '${magzine.name}', '${magzine.md5}', '${magzine.url}');`, (err, res) => {
        err
            ? rej(err.stack)
            : resolve(res);
    });
});
//# sourceMappingURL=insertMagazine.js.map