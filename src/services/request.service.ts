import { fetch } from "./got"

/*
 * @FilePath: /website_checker/src/services/request.service.ts
 * @author: Wibus
 * @Date: 2022-02-11 12:48:14
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-11 12:51:54
 * Coding With IU
 */
export async function _request({ url = '', options = {} }) {
  // const logTrace = (...args) => trace.logTrace('fetch', ...args)
  // logTrace(emojic.bowAndArrow, 'Request', url, '\n', options)
  const { res, buffer } = await fetch(url, options)
  // await this._meterResponse(res, buffer)
  // logTrace(emojic.dart, 'Response status code', res.statusCode)
  return { res, buffer }
}