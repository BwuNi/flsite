"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
const test_1 = __importDefault(require("./test"));
const pdfzj_1 = __importDefault(require("./pdfzj"));
const test = test_1.default(client_1.default), pdfzj = pdfzj_1.default(client_1.default);
exports.test = test;
exports.pdfzj = pdfzj;
//# sourceMappingURL=index.js.map