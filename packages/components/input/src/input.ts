import { buildProps } from "@my-element-plus/utils"
export const inputProps = buildProps({
    modelValue: {
        type: String,
        default: ''
    },
    disabled: Boolean
})
