import { buildProps } from "@my-element-plus/utils"
export const iconProps = buildProps({
    color: {
        type: String
    },
    size: {
        type:  [Number, String]
    }
})
