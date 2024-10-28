import { useCheckboxDisabled, useCheckboxStatus } from ".";
import { CheckboxProps } from "../checkbox";
import { useCheckboxModel } from "./use-checkbox-model";

export const useCheckbox = (props: CheckboxProps) => {
    const { model }  = useCheckboxModel(props)
    const { isChecked } = useCheckboxStatus(props, { model })
    const { isDisabled } = useCheckboxDisabled(props)
    return {
        model,
        isChecked,
        isDisabled
    }
}