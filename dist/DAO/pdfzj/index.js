"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insertBook_1 = __importDefault(require("./insertBook"));
const insertMagzine_1 = __importDefault(require("./insertMagzine"));
const selectAllMagzine_1 = __importDefault(require("./selectAllMagzine"));
const seletctAllBook_1 = __importDefault(require("./seletctAllBook"));
const updateBookDownload_1 = __importDefault(require("./updateBookDownload"));
exports.default = (client) => ({
    addMagazine: insertMagzine_1.default(client),
    selectAllMagazine: selectAllMagzine_1.default(client),
    insertBook: insertBook_1.default(client),
    selectAllBook: seletctAllBook_1.default(client),
    updateBookDownload: updateBookDownload_1.default(client)
});
//# sourceMappingURL=index.js.map