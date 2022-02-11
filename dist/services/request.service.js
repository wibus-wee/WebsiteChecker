var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetch } from "./got";
/*
 * @FilePath: /website_checker/src/services/request.service.ts
 * @author: Wibus
 * @Date: 2022-02-11 12:48:14
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-11 12:51:54
 * Coding With IU
 */
export function _request({ url = '', options = {} }) {
    return __awaiter(this, void 0, void 0, function* () {
        // const logTrace = (...args) => trace.logTrace('fetch', ...args)
        // logTrace(emojic.bowAndArrow, 'Request', url, '\n', options)
        const { res, buffer } = yield fetch(url, options);
        // await this._meterResponse(res, buffer)
        // logTrace(emojic.dart, 'Response status code', res.statusCode)
        return { res, buffer };
    });
}
//# sourceMappingURL=request.service.js.map