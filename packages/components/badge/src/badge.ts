import { buildProps } from "@my-element-plus/utils/vue/props/runtime"
export const badgeProps = buildProps({
    value: {
        type: [String, Number],
        default: ''
    },
    type: {
        type: String,
        default: 'danger'
    },
    max: {
        type: Number,
        default: 99
    }
})