"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const id_map = {}, name_map = {}, name_id_map = {};
exports.default = {
    sub(name, data = true) {
        if (name_map[name]) { }
        let id = v4_1.default(), name_id = name + '__' + id;
        name_map[name] = id;
        id_map[id] = name;
        name_id_map[name_id] = data;
        return id;
    },
    cancel(id) {
        if (!id_map[id]) {
            return;
        }
        const name = id_map[id];
        name_map[name] = null;
        id_map[id] = null;
        name_id_map[name_id] = null;
    },
    check(id) {
        if (!id_map[id]) {
            return false;
        }
        const name = id_map[id], name_id = name + '__' + id;
        return name_id_map[name_id];
    }
};
//# sourceMappingURL=online.js.map