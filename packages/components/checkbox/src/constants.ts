import { InjectionKey } from "vue";
import { CheckboxGroupProps } from "./checkbox-group";

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupProps> = Symbol('checkboxGroupContextKey')