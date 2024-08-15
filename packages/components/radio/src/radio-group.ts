import { buildProps } from "@my-element-plus/utils";
import { ExtractPropTypes } from "vue";
import { radioEmits } from "./radio";

export const  radioGroupProps = buildProps({
    modelValue: {
        type: [String, Number, Boolean],
        default: undefined
    }
})

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits