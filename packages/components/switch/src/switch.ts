import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps, isBoolean, isString, isNumber } from "@my-element-plus/utils"
export const switchProps = buildProps({
    modelValue: {
        type: [Boolean, String, Number],
        default: false
    },
    activeValue: {
        type: [Boolean, String, Number],
        default: true
    },
    inactiveValue: {
        type: [Boolean, String, Number],
        default: false
    },
    activeText: {
        type: String,
        default: ''
    },
    inactiveText: {
        type: String,
        default: ''
    },
    inlinePrompt: Boolean
})

export const switchEmits = {
    [UPDATE_MODEL_EVENT]: (val: boolean | string | number) => 
        isBoolean(val) || isString(val) || isNumber(val)
}