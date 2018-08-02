"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getKey_1 = __importDefault(require("./getKey"));
const jsdecrypt_1 = __importDefault(require("jsdecrypt"));
module.exports = function decrypt(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ctx.request &&
            ctx.request.body &&
            typeof ctx.request.body === 'object' &&
            ctx.request.body.encrypt &&
            ctx.request.body.data) {
            ctx.request.body = JSON.parse(jsdecrypt_1.default.dec(yield getKey_1.default(), ctx.request.body.data));
            yield next();
        }
        else {
            yield next();
        }
    });
};
//# sourceMappingURL=index.js.map