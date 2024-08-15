import { computed, inject, SetupContext } from "vue";
import { RadioEmits, RadioProps } from "./radio";
import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants";
import { radioGroupKey } from "./constants";

export const useRadio = (
    props: RadioProps,
    emit: SetupContext<RadioEmits>['emit']
) => {
    const radioGroup = inject(radioGroupKey, undefined)
    const isGroup = computed(() => !!radioGroup)
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
    return {
        modelValue
    }
}