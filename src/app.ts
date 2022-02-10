/*
 * @FilePath: /website_checker/src/app.ts
 * @author: Wibus
 * @Date: 2022-02-10 22:31:13
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-10 23:09:22
 * Coding With IU
 */

import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})