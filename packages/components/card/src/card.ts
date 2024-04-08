import { buildProps } from "@my-element-plus/utils/vue/props/runtime"
export const cardProps = buildProps({
    header: {
        type: String,
        required: true,
        default: ''
    },
    shadow: {
        type: String,
        default: 'always'
    },
    bodyStyle:{
        type: Object,
        default: ''
    },
    bodyClass: {
        type: String,
        default: ''
    }
})
