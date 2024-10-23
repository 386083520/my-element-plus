import { computed, getCurrentInstance } from "vue";
import { CheckboxProps } from "../checkbox";
import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants";

export const useCheckboxModel = (props: CheckboxProps) => {
    const {  emit } = getCurrentInstance()
    const model = computed({
        get() {
            return props.modelValue
        },
        set(val)  {
            emit(UPDATE_MODEL_EVENT, val)
        }
    })
    return {
        model
    }
}