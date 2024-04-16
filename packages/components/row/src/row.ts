import { buildProps } from "@my-element-plus/utils"
export const rowProps = buildProps({
    gutter: {
        type: Number,
        default: 0
    },
    justify: {
        type: String,
        default: 'start'
    }
})
