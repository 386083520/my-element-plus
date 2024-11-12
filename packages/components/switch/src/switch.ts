import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from "@my-element-plus/constants"
import { buildProps, isBoolean, isString, isNumber, iconPropType, definePropType } from "@my-element-plus/utils"
export const switchProps = buildProps({
    modelValue: {
        type: [Boolean, String, Number],
        default: false
    },
    activeValue: {
        type: [Boolean, String, Number],
        default: true
    },
    inactiveValue: {
        type: [Boolean, String, Number],
        default: false
    },
    activeText: {
        type: String,
        default: ''
    },
    inactiveText: {
        type: String,
        default: ''
    },
    inlinePrompt: Boolean,
    width: {
        type: [String, Number],
        default: ''
    },
    activeIcon: {
        type: iconPropType
    },
    inactiveIcon: {
        type: iconPropType
    },
    activeActionIcon: {
        type: iconPropType
    },
    inactiveActionIcon: {
        type: iconPropType
    },
    loading: Boolean,
    beforeChange: {
        type: definePropType<() => boolean | Promise<boolean>>(Function)
    },
    disabled: Boolean
})

export const switchEmits = {
    [UPDATE_MODEL_EVENT]: (val: boolean | string | number) => 
        isBoolean(val) || isString(val) || isNumber(val),
    [CHANGE_EVENT]: (val: boolean | string | number) => 
        isBoolean(val) || isString(val) || isNumber(val)
}
