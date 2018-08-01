"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const begin = '-----BEGIN PUBLIC KEY-----', end = '-----END PUBLIC KEY-----';
function default_1(params) {
    return new Promise((res, rej) => {
        var ls = child_process_1.exec(`cd ${__dirname} && openssl rsa -in rsa_private_key.pem -pubout`, (error, stdout, stderr) => {
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