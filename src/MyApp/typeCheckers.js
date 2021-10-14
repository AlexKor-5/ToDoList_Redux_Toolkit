export const isObject = e => typeof e === 'object' && !Array.isArray(e) && e !== null

export const isArray = e => Array.isArray(e)

export const isString = e => typeof e === 'string'

export const isUndefined = e => e === undefined
