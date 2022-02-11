/*
 * @FilePath: /website_checker/src/app.ts
 * @author: Wibus
 * @Date: 2022-02-10 22:31:13
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-11 12:52:14
 * Coding With IU
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { _request } from "services/request.service";
const app = express();
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(_request({ url: 'https://www.baidu.com' }));
}));
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    console.log('Go to app: http://localhost:3000');
});
//# sourceMappingURL=app.js.map