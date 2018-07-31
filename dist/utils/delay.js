"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, timeout);
    });
}
exports.default = delay;
//# sourceMappingURL=delay.js.map