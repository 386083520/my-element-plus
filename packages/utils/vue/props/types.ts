export type EpPropInput<Type, Required extends boolean, Default> = {
    type: Type,
    required?: Required,
    default?: Default
}