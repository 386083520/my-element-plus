import { InjectionKey, ToRefs } from "vue";
import { CheckboxGroupProps } from "./checkbox-group";

type CheckboxGroupContext = {
    changeEvent: (...args: any) => any
} & ToRefs<CheckboxGroupProps>

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> = Symbol('checkboxGroupContextKey')