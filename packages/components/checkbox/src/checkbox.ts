import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps } from "@my-element-plus/utils"
import { ExtractPropTypes } from "vue"
export const checkboxProps = buildProps({
    modelValue:  {
        type: Boolean,
        default: undefined
    }
})

export  const checkboxEmits = {
    [UPDATE_MODEL_EVENT]: (val: boolean) => true
}

export type  CheckboxProps = ExtractPropTypes<typeof checkboxProps>