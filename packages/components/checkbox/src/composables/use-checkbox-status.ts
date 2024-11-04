import { computed, inject } from "vue";
import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from "../composables";
import { isArray, isBoolean } from "@my-element-plus/utils";
import { checkboxGroupContextKey } from "../constants";
import { size } from "lodash-unified";

export const useCheckboxStatus = (props: CheckboxProps, { model }: Pick<CheckboxModel, 'model'>) => {
    const checkboxGroup = inject(checkboxGroupContextKey, undefined)
    const isChecked = computed<boolean>(() => {
        const value = model.value
        if(isBoolean(value)) {
            return value
        }else if(isArray(value)) {
            return (value as any).includes(props.value)
        }else if(value !== null && value !== undefined){
            return value === props.trueValue
        } else {
            return !!value
        }
        
    })
    const checkboxSize = computed(() => props.size || checkboxGroup?.size?.value)
    return {
        isChecked,
        checkboxSize
    }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>