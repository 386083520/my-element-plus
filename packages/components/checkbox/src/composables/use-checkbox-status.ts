import { computed } from "vue";
import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from "../composables";

export const useCheckboxStatus = (props: CheckboxProps, { model }: Pick<CheckboxModel, 'model'>) => {
    const isChecked = computed<boolean>(() => {
        return model.value
    })
    return {
        isChecked
    }
}