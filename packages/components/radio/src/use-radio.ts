import { computed, SetupContext } from "vue";
import { RadioEmits, RadioProps } from "./radio";
import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants";

export const useRadio = (
    props: RadioProps,
    emit: SetupContext<RadioEmits>['emit']
) => {
    const modelValue = computed<RadioProps['modelValue']>({
        get() {
            return props.modelValue
        },
        set(val) {
            emit(UPDATE_MODEL_EVENT, val)
        }
    })
    return {
        modelValue
    }
}