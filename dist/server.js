"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
const PORT = 8080;
const init = () => {
    app.listen(PORT, async () => {
        await (0, database_1.default)();
        console.log(`App Is Running at http://localhost:${PORT}`);
    });
};
init();
//# sourceMappingURL=server.js.map