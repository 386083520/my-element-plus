import { withInstall, withNoopInstall } from "@my-element-plus/utils";
import Checkbox from "./src/checkbox.vue";
import CheckboxGroup from "./src/checkbox-group.vue";
export const EllCheckbox  = withInstall(Checkbox, {
    CheckboxGroup
})
export const EllCheckboxGroup = withNoopInstall(CheckboxGroup)
export default EllCheckbox
