import type { EpPropInput } from "./types"
import { fromPairs } from "lodash-unified"
export const buildProp = (prop:EpPropInput<any, any, any,any, any>) => {
    const { values, required, default:defaultValue,type,validator } = prop
    const _validator = 
        values || validator
        ? (val:any) => {
            let valid = false
            if(values) {
                valid||= values.includes(val)
            }
            if(validator) valid||= validator(val)
            return valid
        }
        :undefined
    const epProp = {
        type,
        required,
        validator: _validator
    }
    return epProp
}
export const buildProps = <Props extends Record<string, BooleanConstructor | StringConstructor | EpPropInput<any, any, any, any, any>>>(props:Props):Props => {
    return fromPairs(Object.entries(props).map(([key, option]) => [
        key,
        buildProp(option as any)
    ])) as any
}
