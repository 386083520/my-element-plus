import { componentSizes } from "@my-element-plus/constants";
import { buildProp } from "@my-element-plus/utils";

export const useSizeProp = buildProp({
    type: String,
    values: componentSizes,
    required: false
})