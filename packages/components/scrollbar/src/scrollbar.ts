import { buildProps, definePropType } from "@my-element-plus/utils"
import type { StyleValue } from "vue"
export const scrollbarProps = buildProps({
    wrapStyle: {
        type: definePropType<StyleValue>([String, Object, Array]),
        default: ''
    },
    wrapClass: {
        type: definePropType<StyleValue>([String, Object, Array]),
        default: ''
    },
    height: {
        type: [String, Number],
        default: ''
    },
    maxHeight: {
        type: [String, Number],
        default: ''
    }
})
