import { buildProps } from "@my-element-plus/utils"
export const cardProps = buildProps({
    header: {
        type: String,
        default: ''
    },
    shadow: {
        type: String,
        default: 'always'
    },
    bodyStyle:{
        type: [Object,String],
        default: ''
    },
    bodyClass: String
})
