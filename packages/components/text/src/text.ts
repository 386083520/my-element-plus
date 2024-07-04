import { buildProps } from "@my-element-plus/utils"
import { componentSizes } from "@my-element-plus/constants"
export const textProps = buildProps({
    type: {
        type: String,
        values: ['primary', 'success', 'info', 'warning', 'danger', ''],
        default: ''
    },
    size: {
        type: String,
        values: componentSizes,
        default: ''
    },
    truncated: {
        type: Boolean
    },
    lineClamp: {
        type: [String, Number]
    },
    tag: {
        type: String,
        default: 'span'
    }
})
