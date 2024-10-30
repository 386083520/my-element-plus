import { InjectionKey, ToRefs } from "vue";
import { CheckboxGroupProps } from "./checkbox-group";

type CheckboxGroupContext = ToRefs<CheckboxGroupProps>

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> = Symbol('checkboxGroupContextKey')