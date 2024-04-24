import { isNumber,isString } from "../types";

export function addUnit(value:number|string, defaultUnit='px') {
    if(!value) return ''
    if(isNumber(value)) {
        return  `${value}${defaultUnit}`
    }else if(isString(value)) {
        return value
    }
}