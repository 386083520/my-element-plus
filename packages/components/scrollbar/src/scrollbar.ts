import { buildProps, definePropType } from "@my-element-plus/utils"
import type { StyleValue } from "vue"
export const scrollbarProps = buildProps({
    tag: {
        type: String,
        default: 'div'
    },
    wrapStyle: {
        type: definePropType<StyleValue>([String, Object, Array]),
        default: ''
    },
    wrapClass: {
        type: [String, Array],
        default: ''
    },
    viewStyle: {
        type: definePropType<StyleValue>([String, Object, Array]),
        default: ''
    },
    viewClass: {
        type: [String, Array],
        default: ''
    },
    height: {
        type: [String, Number],
        default: ''
    },
    maxHeight: {
        type: [String, Number],
        default: ''
    },
    always: Boolean
})
