import { computed } from "vue";
import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from "../composables";
import { isArray, isBoolean } from "@my-element-plus/utils";

export const useCheckboxStatus = (props: CheckboxProps, { model }: Pick<CheckboxModel, 'model'>) => {
    const isChecked = computed<boolean>(() => {
        const value = model.value
        if(isBoolean(value)) {
            return value
        }else if(isArray(value)) {
            return value.includes(props.value)
        }else if(value !== null && value !== undefined){
            return value === props.trueValue
        } else {
            return !!value
        }
        
    })
    return {
        isChecked
    }
}