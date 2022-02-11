/*
 * @FilePath: /website_checker/src/services/got.ts
 * @author: Wibus
 * @Date: 2022-02-11 12:05:13
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-11 12:51:47
 * Coding With IU
 */
// import got, { CancelError } from 'got'
import got, { CancelError } from 'got/dist/source'
import {
  fetchLimitBytes as fetchLimitBytesDefault,
  getUserAgent,
} from './got.config'

const userAgent = getUserAgent()

async function sendRequest(url: any, options: any) {
  const gotOptions = Object.assign({}, options)
  gotOptions.throwHttpErrors = false
  gotOptions.retry = { limit: 0 }
  gotOptions.headers = gotOptions.headers || {}
  gotOptions.headers['User-Agent'] = userAgent
  try {
    const resp = await got(url, gotOptions)
    return { res: resp, buffer: resp.body }
  } catch (err) {
    if (err instanceof CancelError) {
      throw new Error("Maximum response size exceeded");
      
      // throw new InvalidResponse({
      //   underlyingError: new Error('Maximum response size exceeded'),
      // })
    }
    // throw new Inaccessible({ underlyingError: err })
    throw new Error('Unknown error in GotsendRequest')
  }
}

function _fetchFactory(fetchLimitBytes = fetchLimitBytesDefault) {
  // const gotWithLimit = got.extend({
  //   handlers: [
  //     (options, next) => {
  //       const promiseOrStream = next(options)
  //       promiseOrStream.on('downloadProgress', (progress: any) => {
  //         if (
  //           progress.transferred > Number(fetchLimitBytes) &&
  //           // just accept the file if we've already finished downloading
  //           // the entire file before we went over the limit
  //           progress.percent !== 1
  //         ) {
  //           /*
  //           TODO: we should be able to pass cancel() a message
  //           https://github.com/sindresorhus/got/blob/main/documentation/advanced-creation.md#examples
  //           but by the time we catch it, err.message is just "Promise was canceled"
  //           */
  //          promiseOrStream.cancel('Maximum response size exceeded')
  //          return "1" 
  //         }
  //       })

  //       return promiseOrStream
  //     },
  //   ],
  // })

  return sendRequest.bind(sendRequest)
}

const fetch = _fetchFactory()

export { fetch, _fetchFactory }