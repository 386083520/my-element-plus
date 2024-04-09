import { buildProps } from "@my-element-plus/utils/vue/props/runtime"
export const badgeProps = buildProps({
    value: {
        type: String,
        default: ''
    }
})