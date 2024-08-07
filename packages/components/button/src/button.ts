import { buildProps } from "@my-element-plus/utils";
import { Loading } from '@element-plus/icons-vue'
import { ExtractPropTypes } from "vue";
export const buttonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    'text',
    ''
] as const
export const buttonProps = buildProps({
    type: {
        type: String,
        values: buttonTypes,
        default: ''
    },
    plain: Boolean,
    round: Boolean,
    icon: {
        type: [String,Object]
    },
    circle: Boolean,
    disabled: Boolean,
    link: Boolean,
    text: Boolean,
    bg: Boolean,
    loading: Boolean,
    loadingIcon: {
        type: Object,
        default: Loading
    },
    size: String,
    tag: {
        type: String,
        default: 'button'
    },
    color: String,
    dark: Boolean,
    autoInsertSpace: {
        type:Boolean,
        default: false
    }
})

export type ButtonProps = ExtractPropTypes<typeof buttonProps>