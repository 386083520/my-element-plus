import { getCurrentInstance } from "vue";
import { CheckboxProps } from "../checkbox";

export const useCheckboxEvent = (props: CheckboxProps) => {
    const { emit } = getCurrentInstance()
    function handleChange(e: Event) {
        emit('change', e)
    }
    return {
        handleChange
    }
}