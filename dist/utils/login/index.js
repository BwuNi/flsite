"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const online_1 = __importDefault(require("./online"));
exports.default = {
    checkUser(id) {
        return online_1.default.check(id);
    },
    login(user_name) {
        return online_1.default.sub(user_name);
    },
    logout(id) {
        return online_1.default.cancel(id);
    }
};
//# sourceMappingURL=index.js.map