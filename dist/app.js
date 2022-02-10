"use strict";
/*
 * @FilePath: /website_checker/src/app.ts
 * @author: Wibus
 * @Date: 2022-02-10 22:31:13
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-10 23:09:22
 * Coding With IU
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=app.js.map