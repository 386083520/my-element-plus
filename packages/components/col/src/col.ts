import { buildProps } from "@my-element-plus/utils"
export const colProps = buildProps({
    tag: {
        type:String,
        default: 'div'
    },
    span: {
        type:  Number,
        default: 24
    },
    offset: {
        type:  Number,
        default: 0
    },
    xs: {
        type: [Number, Object]
    },
    sm: {
        type: [Number, Object]
    },
    md: {
        type: [Number, Object]
    },
    lg: {
        type: [Number, Object]
    },
    xl: {
        type: [Number, Object]
    },
    push: {
        type: Number,
        default: 0
    },
    pull: {
        type: Number,
        default: 0
    }
})
