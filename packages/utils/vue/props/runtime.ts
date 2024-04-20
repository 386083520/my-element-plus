import type { EpPropInput } from "./types"
import { fromPairs } from "lodash-unified"
export const buildProp = (prop:any) => {
    return prop
}
export const buildProps = <Props extends Record<string, BooleanConstructor | StringConstructor | EpPropInput<any, any, any>>>(props:Props):Props => {
    return fromPairs(Object.entries(props).map(([key, option]) => [
        key,
        buildProp(option)
    ])) as any
}
