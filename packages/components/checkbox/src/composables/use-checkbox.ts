import { useCheckboxDisabled, useCheckboxStatus } from ".";
import { CheckboxProps } from "../checkbox";
import { useCheckboxEvent } from "./use-checkbox-event";
import { useCheckboxModel } from "./use-checkbox-model";

export const useCheckbox = (props: CheckboxProps) => {
    const { model }  = useCheckboxModel(props)
    const { isChecked } = useCheckboxStatus(props, { model })
    const { isDisabled } = useCheckboxDisabled(props)
    const {handleChange} = useCheckboxEvent(props)
    return {
        model,
        isChecked,
        isDisabled,
        handleChange
    }
}