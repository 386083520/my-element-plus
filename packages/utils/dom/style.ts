import { isNumber } from "../types";

export function addUnit(value:number, defaultUnit='px') {
    if(!value) return ''
    if(isNumber(value)) {
        return  `${value}${defaultUnit}`
    }
}