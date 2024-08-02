import { componentSizes, UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps } from "@my-element-plus/utils"

export const inputEmits = {
    [UPDATE_MODEL_EVENT]: (value:string) => true,
    input: (value:string) => true,
    change: (value:string) => true,
    focus: (value:string) => true,
    blur: (value:string) => true,
    clear: () => true
}

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
    },
    prefixIcon: {
        type: Object
    },
    size: {
        type: String,
        values: componentSizes,
        required: false
    }
})
