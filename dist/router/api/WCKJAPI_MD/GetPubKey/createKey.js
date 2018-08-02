"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const begin = '-----BEGIN PUBLIC KEY-----', end = '-----END PUBLIC KEY-----';
function default_1(params) {
    return new Promise((res, rej) => {
        var ls = child_process_1.exec(`cd ${path_1.default.resolve(__dirname, '../../../../../common/rsa')} && openssl rsa -in rsa_private_key.pem -pubout`, (error, stdout, stderr) => {
            if (error) {
                console.log('Error code: ' + error.code);
                console.log(error.stack);
                console.log(stderr);
                rej(error);
            }
            res(stdout
                .replace(/\n/g, '')
                .replace(/\r/g, '')
                .replace(begin, '')
                .replace(end, ''));
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=createKey.js.map