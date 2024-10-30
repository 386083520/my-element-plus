import { buildProps, definePropType, isArray } from "@my-element-plus/utils";
import { CheckboxValueType } from "./checkbox";
import { ExtractPropTypes } from "vue";
import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants";
export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]
export const checkboxGroupProps = buildProps({
    modelValue: {
        type: definePropType<CheckboxGroupValueType>(Array),
        default: () => []
    },
    min: Number,
    max: Number,
    disabled: Boolean
})

export const checkboxGroupEmits = {
    [UPDATE_MODEL_EVENT]: (val:CheckboxGroupValueType) => isArray(val),
    change: (val: CheckboxGroupValueType) => isArray(val)
}


export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits