import { buildProps } from "@my-element-plus/utils"
export const textProps = buildProps({
    type: {
        type: String,
        values: ['primary', 'success', 'info', 'warning', 'danger', ''],
        default: ''
    },
    size: {
        type: String,
        values: ['large', 'default', 'small'],
        default: ''
    },
    truncated: {
        type: Boolean
    },
    lineClamp: {
        type: [String, Number]
    }
})