"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const GetMyMenuTops_1 = __importDefault(require("./GetMyMenuTops"));
let api = new koa_router_1.default();
GetMyMenuTops_1.default(api);
exports.default = api;
//# sourceMappingURL=index.js.map