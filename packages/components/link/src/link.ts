import { buildProps } from "@my-element-plus/utils"
export const linkProps = buildProps({
    type: {
        type: String,
        values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
        default: 'default'
    }
})
