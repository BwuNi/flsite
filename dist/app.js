"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const koa_1 = __importDefault(require("koa"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_convert_1 = __importDefault(require("koa-convert"));
const koa_static_1 = __importDefault(require("koa-static"));
const router_1 = __importDefault(require("./router"));
const app = new koa_1.default();
app.use(koa2_cors_1.default());
app.use(koa_convert_1.default(koa_logger_1.default()));
app.use(koa_bodyparser_1.default());
app.use(router_1.default.routes()).use(router_1.default.allowedMethods());
app.use(koa_static_1.default(path_1.default.resolve(__dirname, '../public'), { extensions: ['html'] }));
module.exports = app;
//# sourceMappingURL=app.js.map