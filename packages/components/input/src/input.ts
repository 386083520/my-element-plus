import { componentSizes, UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps, definePropType } from "@my-element-plus/utils"

export type InputAutoSize = { minRows?:number, maxRows?:number } | boolean

export const inputEmits = {
    [UPDATE_MODEL_EVENT]: (value:string) => true,
    input: (value:string) => true,
    change: (value:string) => true,
    focus: (evt:FocusEvent) => true,
    blur: (evt:FocusEvent) => true,
    clear: () => true,
    compositionstart: (evt: CompositionEvent) => true,
    compositionupdate: (evt: CompositionEvent) => true,
    compositionend: (evt: CompositionEvent) => true
}

export const inputProps = buildProps({
    modelValue: {
        type: definePropType<string | number | null | undefined>(
            [String, Number, Object]
        ),
        default: ''
    },
    disabled: Boolean,
    clearable: {
        type: Boolean,
        default: false
    },
    formatter: {
        type: Function
    },
    parser: {
        type: Function
    },
    showPassword: {
        type: Boolean,
        default: false
    },
    suffixIcon: {
        type: [Object, String]
    },
    prefixIcon: {
        type: [Object, String]
    },
    size: {
        type: String,
        values: componentSizes,
        required: false
    },
    type: {
        type: String,
        default: 'text'
    },
    autosize: {
        type: definePropType<InputAutoSize>([Boolean,Object]),
        default: false
    },
    showWordLimit: {
        type: Boolean,
        default: false
    },
    maxlength: {
        type: [String, Number]
    },
    minlength: {
        type: [String, Number]
    },
    resize: {
        type: String,
        values: ['none', 'both', 'horizontal', 'vertical']
    }
})
