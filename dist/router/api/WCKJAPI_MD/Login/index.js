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
const login_1 = __importDefault(require("../../../../utils/login"));
function default_1(router) {
    router.post('/Login', (ctx) => __awaiter(this, void 0, void 0, function* () {
        let data = ctx.request.body, id = login_1.default.login(data.LOGIN);
        ctx.body = JSON.stringify({
            success: true,
            data: id
        });
    }));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map