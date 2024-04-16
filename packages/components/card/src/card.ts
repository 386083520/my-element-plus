import { buildProps } from "@my-element-plus/utils"
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
    bodyClass: String
})
