import { buildProps } from "@my-element-plus/utils";
import { ExtractPropTypes } from "vue";

export const thumbProps = buildProps({
    size: String,
    move: Number,
    always: Boolean,
    ratio: {
        type: Number,
        required: true
    }
})

export type ThumbProps = ExtractPropTypes<typeof thumbProps>
