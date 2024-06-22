import { buildProps } from "@my-element-plus/utils"
export const linkProps = buildProps({
    type: {
        type: String,
        values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
        default: 'default'
    },
    underline: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        default: '_self'
    }
})
