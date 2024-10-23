import { CheckboxProps } from "../checkbox";
import { useCheckboxModel } from "./use-checbox-model";

export const useCheckbox = (props: CheckboxProps) => {
    const { model }  = useCheckboxModel(props)
    return {
        model
    }
}