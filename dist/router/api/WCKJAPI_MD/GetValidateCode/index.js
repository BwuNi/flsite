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
const imgs_1 = __importDefault(require("./imgs"));
function default_1(router) {
    router.get('/GetValidateCode/:data', (ctx) => __awaiter(this, void 0, void 0, function* () {
        let postData = ctx.request.body, url = ctx.request.url, arr = url.split('/'), data = JSON.parse(decodeURIComponent(arr[arr.length - 1])).data;
        ctx.response['content-disposition'] = 'attachment; filename="v.jpeg"';
        ctx.response['Content-Type'] = 'application/vnd.ms-word';
        ctx.body = JSON.stringify({
            success: true,
            data: imgs_1.default[Math.floor(Math.random() * (imgs_1.default.length))].img
        });
    }));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map