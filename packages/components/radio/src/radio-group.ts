import { buildProps } from "@my-element-plus/utils";
import { ExtractPropTypes } from "vue";
import { radioEmits } from "./radio";
import { useSizeProp } from "@my-element-plus/hooks";

export const  radioGroupProps = buildProps({
    modelValue: {
        type: [String, Number, Boolean],
        default: undefined
    },
    disabled: Boolean,
    size: useSizeProp
})

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits