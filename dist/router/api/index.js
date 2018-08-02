"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const WCKJAPI_MD_1 = __importDefault(require("./WCKJAPI_MD"));
let api = new koa_router_1.default();
api.use('/WCKJAPI_MD', WCKJAPI_MD_1.default.routes(), WCKJAPI_MD_1.default.allowedMethods());
exports.default = api;
//# sourceMappingURL=index.js.map