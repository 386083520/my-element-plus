import { computed, inject } from "vue";
import { CheckboxProps } from "../checkbox";
import { checkboxGroupContextKey } from "../constants";
import { isUndefined } from "@my-element-plus/utils";
import { CheckboxModel } from "./use-checkbox-model";
import { CheckboxStatus } from "./use-checkbox-status";

export const useCheckboxDisabled = (props: CheckboxProps, {
    model,
    isChecked
}: Pick<CheckboxModel, 'model'> & Pick<CheckboxStatus, 'isChecked'>) => {
    const checkboxGroup = inject(checkboxGroupContextKey, undefined)

    const isLimitDisabled = computed(() => {
        const max = checkboxGroup?.max?.value
        const min = checkboxGroup?.min?.value
        return (
            (!isUndefined(max) && (model.value as any).length >= max && !isChecked.value) ||
            (!isUndefined(min) && (model.value as any).length <= min && isChecked.value)
        )
    })
    const isDisabled = computed(() => {
        return props.disabled || checkboxGroup?.disabled.value || isLimitDisabled.value
    })
    return {
        isDisabled
    }

}