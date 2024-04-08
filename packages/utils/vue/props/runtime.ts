import type { EpPropInput } from "./types"
export const buildProps = <Props extends Record<string, StringConstructor | EpPropInput<any, any, any>>>(props:Props):Props => {
    return props
}