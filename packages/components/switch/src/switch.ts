import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps, isBoolean } from "@my-element-plus/utils"
export const switchProps = buildProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

export const switchEmits = {
    [UPDATE_MODEL_EVENT]: (val: boolean) => isBoolean(val)
}