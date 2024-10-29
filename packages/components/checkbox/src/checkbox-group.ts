import { buildProps, definePropType } from "@my-element-plus/utils";
import { CheckboxValueType } from "./checkbox";
import { ExtractPropTypes } from "vue";
export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]
export const checkboxGroupProps = buildProps({
    modelValue: {
        type: definePropType<CheckboxGroupValueType>(Array),
        default: () => []
    }
})

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>