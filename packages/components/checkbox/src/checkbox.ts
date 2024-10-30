import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps } from "@my-element-plus/utils"
import { ExtractPropTypes } from "vue"
export type CheckboxValueType = string | number | boolean
export const checkboxProps = buildProps({
    modelValue:  {
        type: [String, Boolean, Number],
        default: undefined
    },
    value: {
        type: [String, Boolean, Number],
        default: undefined
    },
    label: {
        type: [String, Boolean, Number],
        default: undefined
    },
    disabled: Boolean,
    trueValue: {
        type: [String, Number],
        default: undefined
    },
    falseValue: {
        type: [String, Number],
        default: undefined
    },
    indeterminate: Boolean
})

export  const checkboxEmits = {
    [UPDATE_MODEL_EVENT]: (val: boolean) => true
}

export type  CheckboxProps = ExtractPropTypes<typeof checkboxProps>
