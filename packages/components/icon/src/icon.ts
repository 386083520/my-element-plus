import { buildProps, definePropType } from "@my-element-plus/utils"
import { Component } from "vue"

export const iconProps = buildProps({
    color: {
        type: String
    },
    size: {
        type:  [Number, String]
    }
})
