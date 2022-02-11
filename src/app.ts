/*
 * @FilePath: /website_checker/src/app.ts
 * @author: Wibus
 * @Date: 2022-02-10 22:31:13
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-11 12:52:14
 * Coding With IU
 */

import express from "express";
import { _request } from "services/request.service";

const app = express();

app.get('/', async (req, res) => {
  res.send(_request({ url: 'https://www.baidu.com' }));
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
  console.log('Go to app: http://localhost:3000')
})