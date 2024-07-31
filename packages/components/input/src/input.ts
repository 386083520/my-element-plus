import { buildProps } from "@my-element-plus/utils"
export const inputProps = buildProps({
    modelValue: {
        type: String,
        default: ''
    },
    disabled: Boolean,
    clearable: {
        type: Boolean,
        default: false
    },
    formatter: {
        type: Function
    },
    parser: {
        type: Function
    },
    showPassword: {
        type: Boolean,
        default: false
    },
    suffixIcon: {
        type: Object
    }
})
