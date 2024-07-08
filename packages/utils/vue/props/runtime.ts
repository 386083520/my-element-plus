import type { EpPropInput } from "./types"
import { fromPairs } from "lodash-unified"
import { warn } from 'vue'
import { hasOwn } from  '../../objects'
import { isObject } from '../../types'
export const buildProp = (prop:EpPropInput<any, any, any,any, any>, key:string) => {
    if(!isObject(prop)) return prop
    const { values, required, default:defaultValue,type,validator } = prop
    const _validator = 
        values || validator
        ? (val:any) => {
            let valid = false
            let allowedValues = []
            if(values) {
                allowedValues = Array.from(values)
                valid||= allowedValues.includes(val)
            }
            if(validator) valid||= validator(val)
            if(!valid && allowedValues.length > 0) {
                const allowValuesText = allowedValues.join(",")
                warn(
                    `Invalid prop: validation failed${
                        key ? ` for prop "${key}"` : ''
                      }. Expected one of [${allowValuesText}], got value ${JSON.stringify(
                        val
                      )}.`
                )
            }     
            return valid
        }
        :undefined
    const epProp:any = {
        type,
        required,
        validator: _validator
    }
    if(hasOwn(prop, 'default')) epProp.default=defaultValue
    return epProp
}
export const buildProps = <Props extends Record<string, NumberConstructor | BooleanConstructor | StringConstructor | EpPropInput<any, any, any, any, any>>>(props:Props):Props => {
    return fromPairs(Object.entries(props).map(([key, option]) => [
        key,
        buildProp(option as any, key)
    ])) as any
}
