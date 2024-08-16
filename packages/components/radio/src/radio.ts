import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { useSizeProp } from "@my-element-plus/hooks"
import { buildProps } from "@my-element-plus/utils"
import { ExtractPropTypes } from "vue"
export const radioPropsBase = buildProps({
    value: {
        type: [String, Number, Boolean],
        default: undefined
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: undefined
    },
    disabled: Boolean,
    size: useSizeProp
})

export const radioProps = buildProps({
    ...radioPropsBase,
    border: Boolean
})

export const radioEmits = {
    [UPDATE_MODEL_EVENT]: (val: string | number | boolean) => true,
    [CHANGE_EVENT]: (val: string | number | boolean) => true
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
