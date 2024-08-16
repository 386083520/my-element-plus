import { computed, inject, SetupContext } from "vue";
import { RadioEmits, RadioProps } from "./radio";
import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants";
import { radioGroupKey } from "./constants";
import { RadioButtonProps } from "./radio-button";
import { isNil } from "lodash-unified";

export const useRadio = (
    props: RadioProps | RadioButtonProps,
    emit?: SetupContext<RadioEmits>['emit']
) => {
    const radioGroup = inject(radioGroupKey, undefined)
    const isGroup = computed(() => !!radioGroup)
    const actualValue = computed(() => {
        if(!isNil(props.value)) {
            return props.value
        }
        return props.label
    })
    const modelValue = computed<RadioProps['modelValue']>({
        get() {
            return isGroup.value ? radioGroup.modelValue : props.modelValue
        },
        set(val) {
            if(isGroup.value) {
                radioGroup.changeEvent(val)
            }else {
                emit(UPDATE_MODEL_EVENT, val)
            }
        }
    })
    const size = computed(() => props.size || radioGroup.size)
    const disabled = computed(() => props.disabled || radioGroup.disabled)
    return {
        modelValue,
        disabled,
        size,
        actualValue
    }
}