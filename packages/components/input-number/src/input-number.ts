import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps } from "@my-element-plus/utils"
export const inputNumberProps = buildProps({
    modelValue: Number
})

export const inputNumberEmits = {
    [UPDATE_MODEL_EVENT]: (val: number|undefined) => true
}
