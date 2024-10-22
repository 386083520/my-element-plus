import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps } from "@my-element-plus/utils"
export const checkboxProps = buildProps({
    modelValue:  {
        type: Boolean,
        default: undefined
    }
})

export  const checkboxEmits = {
    [UPDATE_MODEL_EVENT]: (val: boolean) => true
}
