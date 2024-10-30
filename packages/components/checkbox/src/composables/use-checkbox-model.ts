import { computed, getCurrentInstance, inject } from "vue";
import { CheckboxProps } from "../checkbox";
import { UPDATE_MODEL_EVENT } from "@my-element-plus/constants";
import { checkboxGroupContextKey } from "../constants";
import { isUndefined } from "@my-element-plus/utils";

export const useCheckboxModel = (props: CheckboxProps) => {
    const {  emit } = getCurrentInstance()
    const checkboxGroup = inject(checkboxGroupContextKey, undefined)
    const isGroup = computed(() => isUndefined(checkboxGroup) === false)
    const model = computed({
        get() {
            return isGroup.value ? checkboxGroup.modelValue.value : props.modelValue
        },
        set(val)  {
            emit(UPDATE_MODEL_EVENT, val)
        }
    })
    return {
        model
    }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>