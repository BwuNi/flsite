"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
let api = new koa_router_1.default();
const GetValidateCode_1 = __importDefault(require("./GetValidateCode"));
const GetPubKey_1 = __importDefault(require("./GetPubKey"));
const Login_1 = __importDefault(require("./Login"));
const GetMyMenuTops_1 = __importDefault(require("./GetMyMenuTops"));
const GetMyMenuChilds_1 = __importDefault(require("./GetMyMenuChilds"));
GetValidateCode_1.default(api);
GetPubKey_1.default(api);
Login_1.default(api);
GetMyMenuTops_1.default(api);
GetMyMenuChilds_1.default(api);
exports.default = api;
//# sourceMappingURL=index.js.map