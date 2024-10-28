import { computed } from "vue";
import { CheckboxProps } from "../checkbox";

export const useCheckboxDisabled = (props: CheckboxProps) => {
    const isDisabled = computed(() => {
        return props.disabled
    })
    return {
        isDisabled
    }

}