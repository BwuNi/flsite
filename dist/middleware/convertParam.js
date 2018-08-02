"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function convertParam(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ctx.request &&
            ctx.request.body &&
            typeof ctx.request.body === 'object' &&
            ctx.request.body.param &&
            typeof ctx.request.body.param === 'string') {
            ctx.request.body = JSON.parse(ctx.request.body.param);
        }
        yield next();
    });
}
exports.default = convertParam;
//# sourceMappingURL=convertParam.js.map