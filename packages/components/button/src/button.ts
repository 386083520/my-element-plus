import { buildProps } from "@my-element-plus/utils";

export const buttonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger'
] as const
export const buttonProps = buildProps({
    type: {
        type: String,
        values: buttonTypes,
        default: ''
    },
    plain: Boolean,
    round: Boolean,
    icon: String,
    circle: Boolean,
    disabled: Boolean,
    link: Boolean,
    text: Boolean,
    bg: Boolean,
    loading: Boolean
})
