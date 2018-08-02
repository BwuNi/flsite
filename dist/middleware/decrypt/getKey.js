"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let key = '';
fs_1.default.readFile(path_1.default.resolve(__dirname, '../../../common/rsa/rsa_private_key.pem'), function (err, data) {
    if (err) {
        return console.error(err);
    }
    key = data.toString();
});
function getKey(func = i => { }) {
    if (key)
        func(key);
    else
        setTimeout(() => {
            getKey(func);
        }, 500);
}
function default_1(params) {
    return new Promise((res, rej) => {
        getKey(res);
    });
}
exports.default = default_1;
//# sourceMappingURL=getKey.js.map