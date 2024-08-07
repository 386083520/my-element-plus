import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps } from "@my-element-plus/utils"
export const inputNumberProps = buildProps({
    modelValue: Number,
    max: {
        type: Number,
        default: Number.POSITIVE_INFINITY
    },
    min: {
        type: Number,
        default: Number.NEGATIVE_INFINITY
    },
    disabled: Boolean,
    step: {
        type: Number,
        default: 1
    },
    precision: {
        type: Number,
        validator: (val: number) => 
            val >= 0 && val === Number.parseInt(`${val}`, 10)
    },
    stepStrictly: Boolean

})

export const inputNumberEmits = {
    [UPDATE_MODEL_EVENT]: (val: number|undefined) => true
}
