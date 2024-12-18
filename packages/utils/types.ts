export const isNumber =  (val: any):val is number => typeof val === 'number'
export {
    isObject,
    isString,
    isArray,
    isFunction,
    isPromise
}  from "@vue/shared"

export const isUndefined = (val:any):val is undefined => val === undefined
export const isBoolean = (val:any):val is boolean => typeof val === 'boolean'
