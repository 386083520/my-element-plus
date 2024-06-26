export const isNumber =  (val: any):val is number => typeof val === 'number'
export {
    isObject,
    isString
}  from "@vue/shared"

export const isUndefined = (val:any):val is undefined => val === undefined