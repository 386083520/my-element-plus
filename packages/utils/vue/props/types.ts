import { BaseHTMLAttributes } from "vue"

export type EpPropInput<Type, Value, Validator,Required extends boolean, Default> = {
    type: Type,
    required?: Required,
    values?: readonly Value[],
    validator?: Validator,
    default?: Default
}
