import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps } from "@my-element-plus/utils"
import { ExtractPropTypes } from "vue"
export const radioProps = buildProps({
    value: {
        type: [String, Number, Boolean],
        default: undefined
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: undefined
    },
    disabled: Boolean
})

export const radioEmits = {
    [UPDATE_MODEL_EVENT]: (val: string | number | boolean) => true
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
