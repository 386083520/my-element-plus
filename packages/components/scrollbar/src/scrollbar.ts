import { buildProps, definePropType } from "@my-element-plus/utils"
import type { StyleValue } from "vue"
export const scrollbarProps = buildProps({
    wrapStyle: {
        type: definePropType<StyleValue>([String, Object, Array]),
        default: ''
    }
})
