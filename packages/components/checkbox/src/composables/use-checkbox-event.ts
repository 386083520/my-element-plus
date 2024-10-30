import { getCurrentInstance } from "vue";
import { CheckboxProps } from "../checkbox";

export const useCheckboxEvent = (props: CheckboxProps) => {
    const { emit } = getCurrentInstance()
    function getLabeledValue(value: boolean) {
        return value === true ? props.trueValue ?? true : props.falseValue ?? false
    }
    function handleChange(e: Event) {
        const target = e.target as HTMLInputElement
        emit('change', getLabeledValue(target.checked), e)
    }
    return {
        handleChange
    }
}