import { buildProps } from "@my-element-plus/utils";
import { radioPropsBase } from "./radio";
import { ExtractPropTypes } from "vue";

export const radioButtonProps = buildProps({
    ...radioPropsBase
})

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>