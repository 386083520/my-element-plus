import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps } from "@my-element-plus/utils"
export const radioProps = buildProps({
    value: {
        type: [String, Number, Boolean],
        default: undefined
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: undefined
    }
})

export const radioEmits = {
    [UPDATE_MODEL_EVENT]: (val: string | number | boolean) => true
}
