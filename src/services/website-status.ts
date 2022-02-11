/*
 * @FilePath: /website_checker/src/website-status.ts
 * @author: Wibus
 * @Date: 2022-02-11 12:37:49
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-11 12:39:50
 * Coding With IU
 */
import Joi from 'joi'

const queryParamSchema = Joi.object({
  up_message: Joi.string(),
  down_message: Joi.string(),
  up_color: Joi.alternatives(Joi.string(), Joi.number()),
  down_color: Joi.alternatives(Joi.string(), Joi.number()),
}).required()

const exampleQueryParams = {
  up_message: 'online',
  up_color: 'blue',
  down_message: 'offline',
  down_color: 'lightgrey',
}

interface renderWebsiteStatusParams {
  isUp: any
  upMessage?: string
  downMessage?: string
  upColor?: string
  downColor?: string
}

function renderWebsiteStatus({
  isUp,
  upMessage = 'up',
  downMessage = 'down',
  upColor = 'brightgreen',
  downColor = 'red',
}: renderWebsiteStatusParams) {
  if (isUp) {
    return { message: upMessage, color: upColor }
  } else {
    return { message: downMessage, color: downColor }
  }
}

export { queryParamSchema, exampleQueryParams, renderWebsiteStatus }