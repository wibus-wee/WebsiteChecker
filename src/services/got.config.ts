/*
 * @FilePath: /website_checker/src/got.config.ts
 * @author: Wibus
 * @Date: 2022-02-11 11:59:41
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-11 12:01:30
 * Coding With IU
 */
import bytes from 'bytes'
import configModule from 'config'
import Joi from 'joi'
import { fileSize } from './validator'

const schema = Joi.object({
  fetchLimit: fileSize,
  userAgentBase: Joi.string().required(),
}).required()
const config = configModule.util.toObject()
const publicConfig = Joi.attempt(config.public, schema, { allowUnknown: true })

const fetchLimitBytes = bytes(publicConfig.fetchLimit)

function getUserAgent(userAgentBase = publicConfig.userAgentBase) {
  let version = 'dev'
  if (process.env.DOCKER_SHIELDS_VERSION) {
    version = process.env.DOCKER_SHIELDS_VERSION
  }
  if (process.env.HEROKU_SLUG_COMMIT) {
    version = process.env.HEROKU_SLUG_COMMIT.substring(0, 7)
  }
  return `${userAgentBase}/${version}`
}

export { fetchLimitBytes, getUserAgent }