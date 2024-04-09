export const isNumber =  (val: any) => typeof val === 'number'

export type EpPropInput<Type, Required extends boolean, Default> = {
    type: Type,
    required?: Required,
    default?: Default
}